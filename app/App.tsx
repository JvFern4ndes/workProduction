import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import { Login } from './src/Login';
import { Main } from './src/Main';

import { AuthContext } from './src/components/Context/authContext';

const Drawer = createDrawerNavigator();

export default function App() {
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
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name='StatusBar' component={StatusBar}/>
          <Drawer.Screen name='Login' component={Login}/>
          <Drawer.Screen name='Main' component={Main}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </AuthContext>
  );
}
