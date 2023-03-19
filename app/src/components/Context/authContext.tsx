import { useNavigation } from '@react-navigation/native';
import React, { createContext, useState } from 'react';

import { api } from '../../utils/api';
import localStorage from '../../utils/localStorage';

const Context = createContext({} as AuthenticatedType);

interface AuthenticatedType {
  authenticated: any
  handleLogin: any
}

interface AuthContext {
  children: any
}

interface LoginPayload {
  userName: string
  password: string
}

function AuthContext({ children }: AuthContext) {
  const [authenticated, setAuthenticated] = useState(false);

  const navigation = useNavigation();

  async function handleLogin(payload: LoginPayload) {
    try {
      const { data: { token } } = await api.post('/authenticate', {...payload});

      localStorage.set('token', JSON.stringify(token));
      api.defaults.headers.Authorization = `Bearer ${token}`;
      navigation.navigate('Main');
      setAuthenticated(true);
    } catch (err: any) {
      console.log(`erro ao fazer login: ${err.message}`);
    }
  }

  return (
    <Context.Provider value={{ authenticated, handleLogin }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthContext };
