import React, { useState, useCallback, ReactElement } from 'react';

type Status = 'success' | 'info' | 'warning' | 'error';

type Notification = {
  message: string;
  status: Status;
};
interface ComponentProps {
  children: ReactElement;
}

export interface NotificationContextValueProps {
  notification: Notification;
  addNotification: (message: string, status: Status) => void;
  removeNotification: () => void;
}

export const NotificationContext = React.createContext({
  notification: null as any,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addNotification: ((message: string, status: Status) => {}) as any,
  removeNotification: (() => {}) as any,
});

export default function NotificationProvider({
  children,
}: ComponentProps): ReactElement {
  const [notification, setNotification] = useState<Notification>(null as any);

  const removeNotification = () => setNotification(null as any);

  const addNotification = (message: string, status: Status) =>
    setNotification({ message, status });

  const contextValue: NotificationContextValueProps = {
    notification,
    addNotification: useCallback(
      (message: string, status: Status) => addNotification(message, status),
      []
    ),
    removeNotification: useCallback(() => removeNotification(), []),
  };

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
    </NotificationContext.Provider>
  );
}
