import React, { ReactElement } from 'react';
import MuiButton, { ButtonProps } from '@material-ui/core/Button';

import ButtonContainer from './styles';

interface LocalProps {
  backgroundColor?: string;
}

type ComponentProps = LocalProps & ButtonProps;

const Button = ({
  backgroundColor,
  disabled,
  ...props
}: ComponentProps): ReactElement => {
  return (
    <ButtonContainer backgroundColor={backgroundColor} disabled={disabled}>
      <MuiButton {...{ disabled, ...props }} />
    </ButtonContainer>
  );
};

export default Button;
