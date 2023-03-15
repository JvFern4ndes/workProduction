import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Login } from './src/Login';
import { Main } from './src/Main';

import { AuthContext } from './src/components/Context/authContext';

const Stack = createNativeStackNavigator();

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
        <Stack.Navigator>
          <Stack.Screen name='StatusBar' component={StatusBar}/>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Main' component={Main}/>
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext>
  );
}
