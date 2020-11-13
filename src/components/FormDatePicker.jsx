import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import { View } from 'react-native';
import { HelperText } from 'react-native-paper';
import { DatePicker } from 'native-base';
import { lightFormat } from 'date-fns';

function FormInput ({label, helper, children, name, ...props}) {
  const _ref = useRef('');

  const { fieldName, registerField, defaultValue, error } = useField(name);

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

  function _changeValue(value) {
    console.tron.log(value);
    return;
    if(_ref.current) {
      _ref.current.value = value;
    }
  }

  return (
    <View style={{marginVertical: 5}}>
      <DatePicker ref={_ref} 
        defaultDate={new Date()} 
        androidMode="default" 
        animationType="fade" 
        locale="pt-BR" 
        formatChosenDate={date => lightFormat(date, "HH:mm")}
        onDateChange={_changeValue} 
        {...props} />
      <HelperText type={error ? "error" : "info"}>{error || helper}</HelperText>
    </View>
  )
}

export default FormInput;