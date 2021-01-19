import React, { ReactElement } from 'react';

import * as L from './styles';

const UnfinishedPage = (): ReactElement => {
  return (
    <L.UnfinishedPageContainer>
      <L.Img src="images/building.jpg" />
    </L.UnfinishedPageContainer>
  );
};

export default UnfinishedPage;
