import React, {useEffect, useState} from 'react';
import Firebase from './src/services/firebase/index.js';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});
  const [currentUser, setCurrentUser] = useState(null);
  const auth = Firebase.auth();

  useEffect(() => {
    function isLoged() {
      setCurrentUser(auth.currentUser);

      auth.onAuthStateChanged((newUser) => {
        if (newUser && newUser !== currentUser?.email) {
          setUser(newUser);
        }

        console.log(auth);
      });
    }

    isLoged();
  }, [currentUser, auth]);

  useEffect(() => {
    if (currentUser?.email) {
      alert(currentUser?.email);
    } else {
      alert('Usuário deslogado');
    }
  }, [currentUser]);

  function signUp() {
    if (email !== '' && password !== '') {
      auth.createUserWithEmailAndPassword(email, password).catch((error) => {
        if (error.code === 'auth/weak-password') {
          alert('A senha precisa ter no mínimo 6 caracteres');
        } else {
          alert(error.message);
        }
      });
    }
  }

  function signIn() {
    if (email !== '' && password !== '') {
      auth.signInWithEmailAndPassword(email, password).catch((error) => {
        if (error.code === 'auth/invalid-email') {
          alert(
            'Email não cadastrado. \npor favor verifique e tente novamente.',
          );
        } else if (error.code === 'auth/wrong-password') {
          alert(
            'A senha está incorreta. \nPor favor verifique os dados e tente novamente',
          );
        }
      });
      setCurrentUser(auth.currentUser);
    }
  }

  function logOut() {
    auth.signOut();
    setCurrentUser(null);
  }

  return (
    <View style={{...styles.container, ...styles.centralize}}>
      <Text style={styles.title}>Teste</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableHighlight
        underlayColor="#41cc6d"
        style={styles.buttonSuccess}
        onPress={signUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableHighlight>

      <TouchableHighlight
        underlayColor="#41cc6d"
        style={styles.buttonSignIn}
        onPress={signIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.buttonLogout} onPress={logOut}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.buttonLogout} onPress={logOut}>
        <Text style={styles.buttonText}>Is user Loged In?</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '95%',
  },

  centralize: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#41cc6d',
    width: '85%',
  },

  buttonSuccess: {
    backgroundColor: '#41cc6d',
    marginTop: 15,
    paddingHorizontal: 35,
    paddingVertical: 5,
    borderRadius: 5,
  },

  buttonSignIn: {
    backgroundColor: '#4799cc',
    marginTop: 15,
    paddingHorizontal: 35,
    paddingVertical: 5,
    borderRadius: 5,
  },

  buttonLogout: {
    backgroundColor: '#ff7587',
    marginTop: 15,
    paddingHorizontal: 35,
    paddingVertical: 5,
    borderRadius: 5,
  },

  buttonText: {
    color: '#fff',
  },
});
