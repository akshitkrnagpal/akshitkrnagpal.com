import { useState, useEffect } from 'react';

const usePersistedState = (key, initialState) => {
  const [state, setState] = useState(initialState);

  const saveState = () => {
    localStorage && localStorage.setItem(key, JSON.stringify(state));
  };

  useEffect(saveState, [state]);

  const value = localStorage && localStorage.getItem(key);

  const value = JSON.parse() || initialState;

  return [state, setState];
};

export default usePersistedState;
