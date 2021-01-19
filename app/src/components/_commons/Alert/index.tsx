import React, { ReactElement } from 'react';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { Snackbar, SnackbarProps } from '@material-ui/core';

interface LocalProps {
  open: boolean;
  autoHideDuration: number;
  snackbarProps?: SnackbarProps;
  alertProps?: AlertProps;
  children: string;
  onClose: () => void;
}

type ComponentProps = LocalProps;

const Alert = ({
  open,
  autoHideDuration,
  snackbarProps,
  alertProps,
  children,
  onClose,
}: ComponentProps): ReactElement => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
      {...snackbarProps}
    >
      <MuiAlert onClose={onClose} {...alertProps}>
        {children}{' '}
      </MuiAlert>
    </Snackbar>
  );
};

export default Alert;
