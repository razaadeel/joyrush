import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import store from './src/store';

//ActionSheet provider for ios, used in driver picker component
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

import Navigation from './src/navigation/Navigation';

import { primaryColor } from './src/theme/colors';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="auto" backgroundColor={primaryColor} translucent={false} />
        <ActionSheetProvider>
          <Navigation />
        </ActionSheetProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
