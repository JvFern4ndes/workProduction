import React from 'react';

import { useFonts } from 'expo-font';
// import { StatusBar } from 'expo-status-bar';

import { AuthContext } from './src/components/Context/authContext';
import { Routes } from './src/routes';
// import { history } from './src/utils/history';
import { History } from 'history';
import { NavigationContainer } from '@react-navigation/native';

interface Props {
  history: History,
  navigator: History
}

export default function App({ history }: Props) {
  const [isFontsLoaded] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AuthContext>
        <Routes />
      </AuthContext>
    </NavigationContainer>
  );
}
