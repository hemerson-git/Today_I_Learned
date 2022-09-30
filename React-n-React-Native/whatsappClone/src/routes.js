import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FormSignUp from './Pages/FormSignUp';
import FormLogin from './Pages/FormLogin';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="SignUp" component={FormSignUp} />
      <Stack.Screen name="Login" component={FormLogin} />
    </Stack.Navigator>
  );
}
