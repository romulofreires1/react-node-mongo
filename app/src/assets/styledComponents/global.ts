import styled from 'styled-components';
import color from 'assets/tokens/styledComponent/_colorsStyled';
import fontSizes from 'assets/tokens/styledComponent/_fontSize';
import spacing from 'assets/tokens/styledComponent/_spacing';

export const Title = styled.h1`
  color: ${color.appLight};
  text-align: center;
  font-size: ${fontSizes.headerMd};
  margin-bottom: ${spacing.spacingLg};
`;

export const ButtonWrapper = styled.div`
  button {
    margin-top: ${spacing.spacingXs};
  }
`;
