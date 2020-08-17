import React, { useRef, useEffect } from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import { useField } from '@unform/core';

function FormInput ({label, helper, children, style, name, ...props}) {
  const _ref = useRef('');

  const { fieldName, registerField, defaultValue, error, clearError } = useField(name);

  useEffect(() => { _ref.current.value = defaultValue }, [ defaultValue ]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: _ref.current,
      path: "value",
      clearValue (ref) {
        ref.value = '';
        ref.clear();
      },
      setValue (ref, value) {
        ref.setNativeProps({ text: value });
        _ref.current.value = value;
      },
      getValue (ref) {
        return ref.value;
      }
    })
  }, [ fieldName, registerField ]);

  function _changeText(value) {
    if(_ref.current) {
      _ref.current.value = value;
    }
  }

  return <View style={styles.fieldWrapper}>
    <Text style={styles.fieldLabel}>{label}</Text>
    <View style={[styles.fieldInputWrapper, { borderColor: error ? "#D20000" : "#888888" }]}>
      <TextInput ref={_ref} 
        defaultValue={defaultValue} 
        onChangeText={_changeText} 
        onFocus={clearError} 
        style={[styles.fieldInput, style]} 
        {...props} />
      {children}
    </View>
    <Text style={[styles.fieldHelper, { color: error ? "#D20000" : "#000000" }]}>{error || helper}</Text>
  </View>
}

export default FormInput;

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