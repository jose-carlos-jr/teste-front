// src/context/useUserContext.ts
import { useContext } from 'react';
import { UserContext } from './UserContext';

export const useUserContext = () => {
  return useContext(UserContext);
};
