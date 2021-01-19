import React, { ReactElement, ReactNode, forwardRef } from 'react';
import MuiMenuItem from '@material-ui/core/MenuItem';

import MenuItemContainer from './styles';

interface LocalProps {
  value?: string | number;
  onClick?: () => void;
  children?: ReactNode;
}
export type ComponentProps = LocalProps;

// forwardRef was added to correct warning
const MenuItem = forwardRef(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ children, ...others }: ComponentProps, _): ReactElement => {
    return (
      <MenuItemContainer>
        <MuiMenuItem {...others}>{children}</MuiMenuItem>
      </MenuItemContainer>
    );
  }
);

export default MenuItem;
