import { useState, useEffect } from 'react';

function useDarkModeLocalStorage(initialValue?: 'true' | 'false') {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    const userLocalDarkValue = localStorage.getItem('dark');
    console.log({ userLocalDarkValue });
    localStorage.setItem('dark', userLocalDarkValue);
  });

  return [value, setValue];
}
export { useDarkModeLocalStorage };
