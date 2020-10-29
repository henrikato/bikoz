import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import { View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

function FormInput ({label, helper, children, name, ...props}) {
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

  return (
    <View style={{marginVertical: 5}}>
      <TextInput ref={_ref} mode="outlined"
        label={label}
        dense={true}
        error={error != null}
        onChangeText={_changeText}
        onFocus={clearError}
        defaultValue={defaultValue}
        {...props} />
        {children}
      <HelperText type={error ? "error" : "info"}>{error || helper}</HelperText>
    </View>
  )
}

export default FormInput;