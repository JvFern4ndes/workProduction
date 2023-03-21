import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../Login';
import { Main } from '../Main';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name='Login'
        options={{
          headerShown: false,
        }}
        component={Login}
      />
      <Screen
        name='Main'
        options={{
          headerShown: false,
        }}
        component={Main}
      />
    </Navigator>
  );
}
