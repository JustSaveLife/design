import React, { useContext } from 'react';
import { AuthContextModel } from '../common/models';

export const AuthContext = React.createContext<AuthContextModel>(
  {} as AuthContextModel
);
export const useAuth = (): AuthContextModel => useContext(AuthContext);
