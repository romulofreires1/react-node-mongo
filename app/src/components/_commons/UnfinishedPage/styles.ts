import color from 'assets/tokens/styledComponent/_colorsStyled';
import styled from 'styled-components';

export const UnfinishedPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: ${color.greyClean};
`;

export const Img = styled.img`
  width: 40%;
  height: 35%;
`;
