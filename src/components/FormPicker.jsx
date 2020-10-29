import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useField } from '@unform/core';
import { Caption, HelperText } from 'react-native-paper';
import Constants from 'expo-constants';
import { Picker } from 'native-base';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

function FormPicker ({label, helper, itens, name, ...props}) {
  const _ref = useRef('');
  const [_value, _setValue] = useState("");

  const { fieldName, registerField, defaultValue, error, clearError } = useField(name);

  useEffect(() => { _ref.current.value = defaultValue }, [ defaultValue ]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: _ref.current,
      path: "selectedValue",
      clearValue (ref) {
        ref.selectedValue = '';
        ref.clear();
      },
      setValue (ref, value) {
        ref.setNativeProps({ selectedValue: value });
        _ref.current.selectedValue = value;
      },
      getValue (ref) {
        return ref.selectedValue;
      }
    })
  }, [ fieldName, registerField ]);

  function _selectValue(value) {
    clearError();
    
    if (_ref.current) {
      _setValue(value);
      _ref.current.selectedValue = value;
    }
  }

  return (
    <View style={styles.fieldWrapper}>
      <Caption style={{marginLeft: 10}}>{label}</Caption>

      <Picker ref={_ref} 
        mode="dropdown"
        style={styles.picker}
        iosIcon={<FontAwesomeIcon icon="caret-down" />} 
        placeholder={helper} 
        selectedValue={_value} 
        onValueChange={_selectValue} 
        {...props}>
        {itens.map(({id, value}) => (
          <Picker.Item key={String(id)} value={id} label={value} />
        ))}
      </Picker>

      <HelperText type="error">{error}</HelperText>
    </View>
  )
}

export default FormPicker;

const styles = StyleSheet.create({
  fieldWrapper: { marginVertical: 5 },
  picker: {
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 5,
    paddingRight: 10
  }
})