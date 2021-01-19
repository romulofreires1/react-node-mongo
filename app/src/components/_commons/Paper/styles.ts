import radius from 'assets/tokens/styledComponent/_radius';
import spacing from 'assets/tokens/styledComponent/_spacing';
import shadows from 'assets/tokens/styledComponent/_shadows';
import styled from 'styled-components';
import color from 'assets/tokens/styledComponent/_colorsStyled';

const PaperContainer = styled.div`
  background: ${color.light};
  background-color: ${color.light};
  width: fit-content;
  height: fit-content;
  position: relative;
  padding: ${spacing.spacingXs};
  border-radius: ${radius.soft};
  box-shadow: ${shadows.elevation3};
`;

export default PaperContainer;
