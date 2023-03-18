import React from 'react';
import { Router } from 'react-router-dom';

import { useFonts } from 'expo-font';
// import { StatusBar } from 'expo-status-bar';

import { AuthContext } from './src/components/Context/authContext';
import { Routes } from './src/routes';
// import { history } from './src/utils/history';
import { History } from 'history';

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
    <AuthContext>
      <Router location={history.location} navigator={history}>
        <Routes />
      </Router>
    </AuthContext>
  );
}
