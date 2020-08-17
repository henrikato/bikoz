import React, { useRef, useEffect } from 'react';
import {  StyleSheet, View, Text } from 'react-native';
import { useField } from '@unform/core';
import { Picker } from '@react-native-community/picker';

function FormPicker ({label, helper, itens, name, ...props}) {
  const _ref = useRef('');

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

  function _selectValue({value, index}) {
    clearError();

    if(_ref.current) {
      _ref.current.selectedValue = value;
    }
  }

  return <View style={styles.fieldWrapper}>
    <Text style={styles.fieldLabel}>{label}</Text>
    <View style={[styles.fieldInputWrapper, { borderColor: error ? "#D20000" : "#888888" }]}>
      <Picker ref={_ref} 
        selectedValue={defaultValue} 
        onValueChange={_selectValue}
        style={styles.fieldInput}>
          {itens.map(({id, value}) => <Picker.Item key={String(id)} label={value} value={id} />)}
        </Picker>
    </View>
    <Text style={[styles.fieldHelper, { color: error ? "#D20000" : "#000000" }]}>{error || helper}</Text>
  </View>
}

export default FormPicker;

const styles = StyleSheet.create({
  fieldWrapper: { marginVertical: 10 },
  fieldLabel: {
    marginLeft: 10,
    marginBottom: 2
  },
  fieldInputWrapper: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#888888",
    borderRadius: 5,
    height: 45,
    alignItems: "center",
    paddingRight: 10
  },
  fieldInput: {
    flexGrow: 1,
    padding: 10,
  },
  fieldHelper: {
    opacity: .7,
    marginLeft: 10,
    fontSize: 12
  }
})