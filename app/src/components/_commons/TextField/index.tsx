import React, { ReactElement } from 'react';
import MuiTextField, { TextFieldProps } from '@material-ui/core/TextField';
import TextFieldWrapper from './styles';

export type ComponentProps = { labelColor?: string } & TextFieldProps;

const TextField = ({ labelColor, ...others }: ComponentProps): ReactElement => {
  return (
    <TextFieldWrapper labelColor={labelColor}>
      <MuiTextField {...others} />
    </TextFieldWrapper>
  );
};

export default TextField;
