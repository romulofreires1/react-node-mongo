import color from 'assets/tokens/styledComponent/_colorsStyled';
import fontSizes from 'assets/tokens/styledComponent/_fontSize';
import styled from 'styled-components';

const ButtonContainer = styled.div<{
  backgroundColor?: string;
  disabled?: boolean;
}>`
  button {
    color: ${color.light};
    background-color: ${({ backgroundColor = color.appRegular, disabled }) =>
      disabled ? color.greyDarken : backgroundColor};
    :hover {
      color: ${color.appLight};
      background-color: ${({ backgroundColor = color.appRegular }) =>
        backgroundColor};
    }
  }

  .MuiButton-root {
    text-transform: unset;
  }

  .MuiButton-label {
    font-size: ${fontSizes.bodyMd};
  }
`;

export default ButtonContainer;
