import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Router, Switch } from 'react-router';

import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import { AuthContext } from './src/components/Context/authContext';
import { Routes } from './src/routes';
import { history } from './src/utils/history';

interface Props {
  history: History;
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
      <Router history={history}>
        <Switch>
          <Routes />
        </Switch>
      </Router>
    </AuthContext>
  );
}
