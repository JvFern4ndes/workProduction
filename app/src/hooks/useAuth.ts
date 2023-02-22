import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../utils/api';

interface LoginPayload {
  username: string
  password: string
}

interface UseAuth {
  handleLogin( payload: LoginPayload ): Promise<void>
  handleLogout(): void
}

function useAuth(): UseAuth {

  function handleLogout() {
    AsyncStorage.removeItem('session');
  }

  async function handleLogin( payload: LoginPayload ): Promise<void> {
    try {
      const authentication = await api.post('/authentication', payload);

      AsyncStorage.setItem('session', JSON.stringify(authentication.data));
    } catch (err: any) {
      console.error(err.message);
    }
  }

  return {
    handleLogin,
    handleLogout
  };
}

export { useAuth };
