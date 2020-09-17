/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TextInput, TouchableHighlight, Text, StyleSheet} from 'react-native';

export default function FormSignUp() {
  return (
    <View style={styles.container}>
      <View style={styles.formGroup}>
        <TextInput style={styles.formControl} placeholder="Nome" />
        <TextInput style={styles.formControl} placeholder="E-mail" />
        <TextInput style={styles.formControl} placeholder="Senha" />
      </View>

      <View style={styles.buttonView}>
        <TouchableHighlight
          style={styles.btnSignUp}
        >
          <Text style={styles.btnText}>Cadastrar</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  titleView: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 25,
  },

  formGroup: {
    flex: 4,
    justifyContent: 'center',
  },

  buttonView: {
    flex: 1,
  },

  formControl: {
    fontSize: 20,
    height: 45,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },

  text: {
    fontSize: 20,
  },

  btnSignUp: {
    backgroundColor: '#115E54',
    alignItems: 'center',
    padding: 8,
    borderRadius: 5,
  },

  btnText: {
    color: '#fff',
    fontSize: 20,
  },
});
