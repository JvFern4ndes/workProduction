import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../Login';
import { Main } from '../Main';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name='Login'
        component={Login}
      />
      <Screen
        name='Main'
        component={Main}
      />
    </Navigator>
  );
}
