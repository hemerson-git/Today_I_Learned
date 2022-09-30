import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {useAuth} from '../../contexts/auth';

export default function SignIn() {
  const {signed, signIn} = useAuth;

  console.log(signed);

  function handleSignIn() {
    signIn();
  }

  return (
    <View style={styles.container}>
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
