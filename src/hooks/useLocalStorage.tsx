import { useState } from 'react';

const useLocalStorage = (keyName: string, defaultValue: string | null) => {
  const initialize = () => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      console.error(
        `Error reading localStorage key: "${keyName}". Error message: ${err}`
      );
      return defaultValue;
    }
  };

  const [storedValue, setStoredValue] = useState(initialize);

  const setValue = (newValue: string) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
      setStoredValue(newValue);
    } catch (err) {
      console.error(
        `Error setting localStorage key: "${keyName}". Error message: ${err}`
      );
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
