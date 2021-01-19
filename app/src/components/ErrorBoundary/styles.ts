import styled from 'styled-components';
import spacing from 'assets/tokens/styledComponent/_spacing';
import color from 'assets/tokens/styledComponent/_colorsStyled';
import fontSizes from 'assets/tokens/styledComponent/_fontSize';

export const ErrorBoundaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: ${spacing.spacingMd};
  color: ${color.light};
  background-color: ${color.appRegular};
`;

export const Title = styled.h1`
  font-size: ${fontSizes.headerXl};
`;

export const Text = styled.span``;
