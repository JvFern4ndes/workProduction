import React, { createContext, useState } from 'react';

import { api } from '../../utils/api';

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
    const { data } = await api.post('/authenticate');

    setAuthenticated(true);
  }

  return (
    <Context.Provider value={{ authenticated, handleLogin }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthContext };
