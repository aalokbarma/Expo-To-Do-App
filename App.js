import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AboutScreen from './Screens/AboutScreen';
import HomeScreen from './Screens/HomeScreen';
import Navigation from './Navigation';

export default function App() {
  return (
    // <View style={styles.container}>
    <>
      <Navigation />
      {/* <HomeScreen /> */}
      {/* <Text>Hello World !!!</Text> */}
      {/* <StatusBar style="auto" /> */}
    </>
    // </View>
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
