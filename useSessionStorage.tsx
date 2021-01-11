import { useEffect, useState } from 'react';

type ReturnType<T> = [
  T | undefined,
  React.Dispatch<React.SetStateAction<T | undefined>>
];

export const useSessionStorage = <T,>(
  key: string,
  initialValue?: T,
): ReturnType<T> => {
  const [stateOfSessionStorage, setStateOfSessionStorage] = useState<T | undefined>(() => {
    if (!initialValue) return;
    try {
      const value = sessionStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (err) {
      return initialValue;
    }
  });

  useEffect(() => {
    if (stateOfSessionStorage) {
      try {
        sessionStorage.setItem(key, JSON.stringify(stateOfSessionStorage));
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    }
  }, [stateOfSessionStorage, key]);

  return [stateOfSessionStorage, setStateOfSessionStorage];
};