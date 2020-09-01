import firebase, {database} from 'firebase';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function App() {
  const [pontuation, setPontuation] = useState(0);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: 'AIzaSyCDWWBT-C58bH0Cj5cxR9NKJ-LNqgwKc9M',
      authDomain: 'configuracaofirebasereac-c3352.firebaseapp.com',
      databaseURL: 'https://configuracaofirebasereac-c3352.firebaseio.com',
      projectId: 'configuracaofirebasereac-c3352',
      storageBucket: 'configuracaofirebasereac-c3352.appspot.com',
      messagingSenderId: '302887215702',
      appId: '1:302887215702:web:22a78e81a71b74dd0911f7',
      measurementId: 'G-JHBYYQP0ZY',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }, []);

  useEffect(() => {
    let pontuation = firebase.database().ref('pontuacao');
    pontuation.on('value', (snapshot) => {
      setPontuation(snapshot.val());
    });
  }, []);

  function salveData() {
    const database = firebase.database();
    database.ref('pontuacao').set(100);
  }

  function deleteData() {
    const database = firebase.database();
    database.ref('users').remove();
  }

  function listData() {
    let pontuation = firebase.database().ref('pontuancao');
    pontuation.on('value', (snapshot) => {
      console.log(snapshot.val());
    });
  }

  return (
    <View style={{...styles.container, ...styles.centralize}}>
      <Text style={styles.title}>Pontuação: {pontuation}</Text>

      <Button
        onPress={salveData}
        title="Salvar Dados"
        color="#841584"
        accessibilityLabel="Salvar dados"
      />
      <Button
        onPress={deleteData}
        title="Deletar Dados"
        color="#841584"
        accessibilityLabel="Deletar dados"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  centralize: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
