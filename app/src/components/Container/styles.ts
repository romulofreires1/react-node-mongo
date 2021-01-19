import styled from 'styled-components';

export const Container = styled.div``;

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (min-width: 960px) {
    height: calc(100vh - 64px - 64px);
  }
`;

export default Container;
