import styled from 'styled-components';
import spacing from 'assets/tokens/styledComponent/_spacing';
import color from 'assets/tokens/styledComponent/_colorsStyled';
import fontWeights from 'assets/tokens/styledComponent/_fontWeigths';

export const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;
export const PaperContent = styled.div`
  min-width: 350px;
  display: flex;
  flex-direction: column;
  h1 {
    color: ${color.appRegular};
  }
  .confirmButton {
    width: 100%;
    font-weight: ${fontWeights.high};
  }
`;

export const TextFieldWrapper = styled.div`
  margin-bottom: ${spacing.spacingSm};
  display: grid;
`;
