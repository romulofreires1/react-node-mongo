import React, { ReactElement } from 'react';

import * as S from './styles';

interface ComponentProps {
  children: ReactElement;
}
export default function CalculatorTemplate({
  children,
}: ComponentProps): ReactElement {
  return (
    <S.CalculatorTemplateContainer>{children}</S.CalculatorTemplateContainer>
  );
}
