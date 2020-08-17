import React, { useRef, useEffect, useState } from 'react';
import {  StyleSheet, View, Text, TouchableOpacity, ActionSheetIOS, TextInput } from 'react-native';
import { useField } from '@unform/core';

function FormPicker ({label, helper, itens, name, ...props}) {
  const _ref = useRef('');
  const [value, setValue] = useState();

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
        ref.setNativeProps({ value: value });
        _ref.current.value = value;
      },
      getValue (ref) {
        return ref.value;
      }
    })
  }, [ fieldName, registerField ]);

  useEffect(() => { _selectValue(value) }, [ value ]);

  function _selectValue(value) {
    if(_ref.current) {
      _ref.current.value = value;
    }
  }

  function _abrirActionSheet() {
    clearError();

    let values = itens.map(({id, value}) => value);
    values.push("Cancelar");

    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: values,
        destructiveButtonIndex: itens.length
      },
      selectedIndex => {
        if(selectedIndex === itens.length) return;
        
        let {value} = itens[selectedIndex];
        setValue(value);
      }
    )
  }

  return <View style={styles.fieldWrapper}>
    <Text style={styles.fieldLabel}>{label}</Text>
    <View style={[styles.fieldInputWrapper, { borderColor: error ? "#D20000" : "#888888" }]}>
      <TouchableOpacity style={styles.fieldInput} onPress={() => _abrirActionSheet()}>
        <Text>{value || "Selecione uma opção..."}</Text>
      </TouchableOpacity>
      <TextInput style={{display: "none"}} ref={_ref} defaultValue={defaultValue} />
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