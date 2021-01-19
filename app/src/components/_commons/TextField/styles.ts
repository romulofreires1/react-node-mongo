import styled from 'styled-components';
import color from 'assets/tokens/styledComponent/_colorsStyled';
import radius from 'assets/tokens/styledComponent/_radius';
import shadows from 'assets/tokens/styledComponent/_shadows';
import spacing from 'assets/tokens/styledComponent/_spacing';
import fontSizes from 'assets/tokens/styledComponent/_fontSize';

const TextFieldWrapper = styled.div<{ labelColor?: string }>`
  input {
    border-radius: ${radius.rounded};
    padding-top: ${spacing.spacingXxxs};
    background-color: ${color.light};
    padding: ${spacing.spacingTiny};
    margin-top: ${spacing.spacingTiny};
    box-shadow: ${shadows.elevation1};
  }

  input:disabled {
    background-color: ${color.greyLight};
  }

  .MuiSelect-select.MuiSelect-select {
    background-color: ${color.light};
    border-radius: ${radius.rounded};
    padding-left: ${spacing.spacingTiny};
    margin-top: ${spacing.spacingTiny};
    height: 1.2rem;
  }

  .MuiSelect-selectMenu {
    min-height: 0;
  }

  .MuiInput-underline:before {
    border-bottom: unset;
    content: unset;
  }

  .MuiFormLabel-root {
    color: ${({ labelColor }) => labelColor || color.light};
    font-size: ${fontSizes.bodyLg};
  }

  .MuiFormLabel-root.Mui-disabled {
    color: ${({ labelColor }) => labelColor || color.light};
  }

  .MuiInput-underline:after {
    content: unset;
    border-bottom: unset;
  }

  .MuiFormLabel-root.Mui-focused {
    color: ${({ labelColor }) => labelColor || color.light};
  }

  .MuiFormControl-root {
    width: 100%;
  }

  .MuiInputBase-input {
    height: ${spacing.spacingXs};
  }
`;

export default TextFieldWrapper;
