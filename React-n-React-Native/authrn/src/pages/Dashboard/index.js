import React from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';

import {useAuth} from '../../contexts/auth';

export default function Dashboard() {
  const {signOut, user} = useAuth;

  function handleLogout() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <Text>{user ? user.name : false}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
