/* eslint-disable prettier/prettier */
import React from 'react';
import {TextInput, View, Text, TouchableHighlight, StyleSheet, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';

export default function FormLogin({ navigation }) {
  return (

    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Whatsapp Clone</Text>
      </View>

      <View style={styles.formGroup}>
        <TextInput style={styles.formControl} placeholder="E-mail" />
        <TextInput style={styles.formControl} placeholder="Senha" />
        <View style={styles.link}>
          <Text style={styles.text}>Ainda não possui cadastro?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={styles.btnSignUp}>Crie aqui.</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.formGroup}>
        <TouchableHighlight
          onPress={() => {}}
          style={styles.btnLogin}
        >
          <Text style={styles.btnText}>Acessar</Text>
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
    flex: 2,
  },

  formControl: {
    fontSize: 20,
    height: 45,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },

  link: {
    flexDirection: 'row',
  },

  text: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnSignUp: {
    fontSize: 20,
    marginLeft: 8,
    textDecorationLine: 'underline',
  },

  btnLogin: {
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
