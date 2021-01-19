import styled from 'styled-components';
import color from 'assets/tokens/styledComponent/_colorsStyled';
import spacing from 'assets/tokens/styledComponent/_spacing';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${spacing.spacingTiny};
  padding: ${spacing.spacingXxxs};
  height: 64px;
  background-color: ${color.appDarken};
  width: 100%;
  color: ${color.light};
`;

export default FooterContainer;
