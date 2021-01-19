import React, { ReactElement } from 'react';
import { useIntl } from 'react-intl';

import FooterContainer from './styles';

const Footer = (): ReactElement => {
  const { formatMessage } = useIntl();
  return (
    <FooterContainer>
      <span>{formatMessage({ id: 'copyright' })}</span>
    </FooterContainer>
  );
};

export default Footer;
