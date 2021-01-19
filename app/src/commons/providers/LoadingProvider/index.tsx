import React, { useCallback, ReactElement, useEffect } from 'react';

import { useStateWithCallbackLazy } from 'use-state-with-callback';

interface ComponentProps {
  children: ReactElement;
}

export interface LoadingContextValueProps {
  loading: boolean;
  addLoading: () => void;
  removeLoading: (callback?: (() => void) | undefined) => void;
}

export const LoadingContext = React.createContext({
  loading: false as boolean,
  addLoading: (() => {}) as any,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeLoading: ((callback?: () => void) => {}) as any,
});

const LAZY = 1000;

let timeout: any = null;

export default function LoadingProvider({
  children,
}: ComponentProps): ReactElement {
  const [loading, setLoading] = useStateWithCallbackLazy(false);

  useEffect(() => {
    return () => clearTimeout(timeout);
  }, []);

  const addLoading = useCallback(() => setLoading(true, () => null), [
    setLoading,
  ]);
  // callback é uma função executada após a mudança de estado
  const removeLoading = useCallback(
    (callback?: () => void) => {
      timeout = setTimeout(() => {
        setLoading(false, () => callback && callback());
      }, LAZY);
    },
    [setLoading]
  );

  const contextValue: LoadingContextValueProps = {
    loading,
    addLoading,
    removeLoading,
  };

  return (
    <LoadingContext.Provider value={contextValue}>
      {children}
    </LoadingContext.Provider>
  );
}
