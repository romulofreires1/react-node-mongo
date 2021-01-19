import React, { ReactElement } from 'react';
import useNotification from '../../commons/hooks/useNotification';
import Alert from '../_commons/Alert';

export default function Notification(): ReactElement {
  const { notification, removeNotification } = useNotification();

  const handleSubmit = () => {
    removeNotification();
  };

  return (
    notification && (
      <Alert
        open={!!notification}
        autoHideDuration={2000}
        onClose={handleSubmit}
        alertProps={{ variant: 'filled', severity: notification?.status }}
      >
        {notification?.message}
      </Alert>
    )
  );
}
