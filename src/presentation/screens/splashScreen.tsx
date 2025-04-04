import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemedScreenProps } from '../../core/utils/type';


const SplashScreen = ({theme}: ThemedScreenProps) => {
  return (
   <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
    <Text style={[styles.text, {backgroundColor: theme.textColor}]}>Welcome to My App</Text>
   </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default SplashScreen;
