import { useState, useEffect } from 'react';
function useDarkModeLocalStorage(initialValue) {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    localStorage.setItem('dark', value);
  });
  return [value, setValue];
}

export { useDarkModeLocalStorage };
