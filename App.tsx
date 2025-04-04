/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Switch, Text } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store, RootState } from './src/presentation/redux/store';
import SplashScreen from './src/presentation/screens/splashScreen';
import ProductScreen from './src/presentation/screens//productScreen';
import { hideSplash } from './src/presentation/redux/slice/productSlice';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { Theme } from './src/core/utils/type';



const themes: { light: Theme; dark: Theme} = {
  light: {
    backgroundColor: '#fff',
    textColor: '#000',
  },
  dark: {
    backgroundColor: '#333',
    textColor: '#fff',
  },
};

const AppContent = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { isSplashVisible } = useSelector((state: RootState) => state.product);

  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const currentTheme = isDarkTheme ? themes.dark : themes.light;

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(hideSplash());
    }, 5000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <View style={[styles.appContainer, { backgroundColor: currentTheme.backgroundColor }]}>
      <View style={styles.themeSwitchContainer}>
        <Text style={[styles.themeText, { color: currentTheme.textColor }]}>
          {isDarkTheme ? 'Dark Theme' : 'Light Theme'}
        </Text>
        <Switch
          value={isDarkTheme}
          onValueChange={(value) => setIsDarkTheme(value)}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkTheme ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>


      {isSplashVisible ? (
        <SplashScreen theme={currentTheme} />
      ) : (
        <ProductScreen theme={currentTheme} />
      )}
    </View>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  themeSwitchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  themeText: {
    fontSize: 16,
    marginRight: 10,
  },
});

export default App;
