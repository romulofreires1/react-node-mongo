import React, { ReactElement } from 'react';

import Header from '../Header';
import Footer from '../Footer';
import * as S from './styles';

interface ComponentProps {
  children: ReactElement;
}

const Container = ({ children }: ComponentProps): ReactElement => {
  return (
    <S.Container>
      <Header />
      <S.Main>{children}</S.Main>
      <Footer />
    </S.Container>
  );
};

export default Container;
