import React, { ReactElement } from 'react';

import PaperContainer from './styles';

interface LocalProps {
  children: ReactElement;
}

const Paper = ({ children }: LocalProps): ReactElement => {
  return <PaperContainer>{children}</PaperContainer>;
};

export default Paper;
