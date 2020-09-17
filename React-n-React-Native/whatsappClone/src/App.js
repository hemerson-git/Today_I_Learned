/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Routes from './routes';
import reducers from './reducers';

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={createStore(reducers)}>
        <Routes/>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
