import React from 'react';
import { AuthContext } from './auth-context';

const AuthProvider: React.FC = ({ children }) => {
  const login = async (
    _username: string,
    _password: string
  ): Promise<void> => {};
  const logout = async (): Promise<void> => {};

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: false,
        isLoading: false,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
