import color from 'assets/tokens/styledComponent/_colorsStyled';
import spacing from 'assets/tokens/styledComponent/_spacing';
import fontWeights from 'assets/tokens/styledComponent/_fontWeigths';
import styled from 'styled-components';
import fontSizes from 'assets/tokens/styledComponent/_fontSize';

export const SigninContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  justify-content: center;
  align-items: center;
  background-color: ${color.appRegular};
`;

export const PaperContent = styled.div`
  min-width: 300px;
  h1 {
    color: ${color.appRegular};
  }
  form {
    display: flex;
    flex-direction: column;
    .confirmButton {
      width: 100%;
      font-weight: ${fontWeights.high};
    }
  }
`;

export const TextFieldWrapper = styled.div`
  margin-bottom: ${spacing.spacingSm};
  display: grid;
`;

export const SignupLink = styled.a`
  width: fit-content;
  font-size: ${fontSizes.bodyXs};
  color: ${color.infoDarken};
  height: ${spacing.spacingXs};
  transition: 0.2s;
  :hover {
    opacity: 0.8;
  }
`;
