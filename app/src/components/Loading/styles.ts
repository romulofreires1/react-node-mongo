import styled from 'styled-components';
import color from 'assets/tokens/styledComponent/_colorsStyled';

const LoadingContainer = styled.div<{ loading: number }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ loading }) => loading && '100%'};
  height: ${({ loading }) => loading && '100%'};
  background-color: ${({ loading }) => loading && color.greyClean};
  opacity: ${({ loading }) => loading && 0.5};
`;

export default LoadingContainer;
