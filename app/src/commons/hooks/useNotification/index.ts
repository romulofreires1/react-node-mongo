import { useContext } from 'react';
import {
  NotificationContext,
  NotificationContextValueProps,
} from '../../providers/NotificationProvider';

function useNotification(): NotificationContextValueProps {
  const { notification, addNotification, removeNotification } = useContext(
    NotificationContext
  );
  return { notification, addNotification, removeNotification };
}

export default useNotification;
