import { useRef } from 'react';

export function useComponentWillMount() {
  const willMount = useRef(true);

  if (willMount.current) {
    func();
  }

  willMount.current = false;
}
