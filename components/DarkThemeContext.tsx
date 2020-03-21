import React from 'react';

type Action = { type: 'dark' } | { type: 'light' };
type Dispatch = (action: Action) => void;
type State = { dark: boolean };
type DarkThemeProviderProps = { children: React.ReactNode };

const DarkStateContext = React.createContext<State | undefined>(
  undefined
);
const DarkStateDispatch = React.createContext<Dispatch | undefined>(
  undefined
);

function darkThemeReducer(state: State, action: Action) {
  switch (action.type) {
    case 'dark': {
      return { dark: true };
    }
    case 'light': {
      return { dark: false };
    }
    default: {
      throw new Error(`Unhandled action Type: ${action}`);
    }
  }
}
function DarkThemeProvider({ children }: DarkThemeProviderProps) {
  const [state, dispatch] = React.useReducer(darkThemeReducer, {
    dark: true,
  });
  return (
    <DarkStateContext.Provider value={state}>
      <DarkStateDispatch.Provider value={dispatch}>
        {children}
      </DarkStateDispatch.Provider>
    </DarkStateContext.Provider>
  );
}

function useDarkState() {
  const context = React.useContext(DarkStateContext);
  if (context === undefined) {
    throw new Error(
      `useDarkState must be used within a DarkThemeProvider `
    );
  }
  return context;
}

function useDarkDispatch() {
  const context = React.useContext(DarkStateDispatch);
  if (context === undefined) {
    throw new Error(
      `useDarkDispatch must be used within a DarkThemeProvider`
    );
  }
  return context;
}

export { useDarkDispatch, useDarkState, DarkThemeProvider };
