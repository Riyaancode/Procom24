'use client';

import { useContext } from 'react';

import { AuthContext } from './context';

const useAuthContext = () => {
  return useContext(AuthContext);
};

export default useAuthContext;
