import React, { createContext, useState } from 'react';

import { api } from '../../utils/api';
import { history } from '../../utils/history';

const Context = createContext({} as AuthenticatedType);

interface AuthenticatedType {
  authenticated: any
  handleLogin: any
}

interface AuthContext {
  children: any
}

function AuthContext({ children }: AuthContext) {
  const [authenticated, setAuthenticated] = useState(false);

  async function handleLogin() {
    const { data: { token } } = await api.post('/authenticate');

    localStorage.setItem('token', JSON.stringify(token));
    api.defaults.headers.Authorization = `Bearer ${token}`;
    history.push('/orders');
    setAuthenticated(true);
  }

  return (
    <Context.Provider value={{ authenticated, handleLogin }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthContext };
