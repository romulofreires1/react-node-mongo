import React, { ReactElement } from 'react';

import * as S from './styles';

interface ComponentProps {
  children: ReactElement;
}

interface ComponentStates {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<
  ComponentProps,
  ComponentStates
> {
  constructor(props: ComponentProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): any {
    return { hasError: true };
  }

  render(): ReactElement {
    if (this.state.hasError) {
      return (
        <S.ErrorBoundaryContainer>
          <S.Title>Ops!!!</S.Title>
          <S.Text>Algo deu errado...</S.Text>
        </S.ErrorBoundaryContainer>
      );
    }

    return this.props.children;
  }
}
