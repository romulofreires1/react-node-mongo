import React, { ReactElement } from 'react';
import MuiCircularProgress, {
  CircularProgressProps,
} from '@material-ui/core/CircularProgress';

import CircularProgressContainer from './styles';

interface LocalProps {
  isOpen: boolean;
}

type ComponentProps = LocalProps & CircularProgressProps;

const CircularProgress = ({
  isOpen,
  ...props
}: ComponentProps): ReactElement => {
  return (
    <CircularProgressContainer>
      {isOpen && <MuiCircularProgress {...props} />}
    </CircularProgressContainer>
  );
};

export default CircularProgress;
