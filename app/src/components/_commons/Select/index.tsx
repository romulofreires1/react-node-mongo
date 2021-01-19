import React, { ReactElement } from 'react';
import MuiSelect, { SelectProps } from '@material-ui/core/Select';

export type ComponentProps = SelectProps;

const Select = (props: ComponentProps): ReactElement => {
  return <MuiSelect {...props} />;
};

export default MuiSelect;
