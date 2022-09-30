import React from 'react';

import {useAuth} from '../contexts/auth';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

export default function Routes() {
  const {signed, loading} = useAuth;

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
