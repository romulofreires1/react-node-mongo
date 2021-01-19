import color from 'assets/tokens/styledComponent/_colorsStyled';
import fontSizes from 'assets/tokens/styledComponent/_fontSize';
import styled from 'styled-components';

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: ${fontSizes.headerSm};
  span {
    color: ${color.appLight};
  }
`;

export default ResultContainer;
