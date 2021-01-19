import styled from 'styled-components';
import spacing from 'assets/tokens/styledComponent/_spacing';
import color from 'assets/tokens/styledComponent/_colorsStyled';
import fontWeights from 'assets/tokens/styledComponent/_fontWeigths';
import radius from 'assets/tokens/styledComponent/_radius';

export const CalculatorTemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.spacingXs};
  margin: ${spacing.spacingXs} 0;

  @media (min-width: 425px) and (max-width: 960px) {
    width: 425px;
  }

  @media (min-width: 960px) {
    width: 80%;
    height: 80%;
    flex-direction: row;
    > div {
      width: 300px;
    }
  }
`;

export const Img = styled.img<{ width?: string; height?: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: none;
  @media (min-width: 1440px) {
    display: flex;
  }
`;

export const LeftSide = styled.div`
  padding: 0 ${spacing.spacingXs};
  color: ${color.light};
  a {
    color: ${color.appClean};
  }
  @media (min-width: 960px) {
    flex: 1 1 auto;
  }
`;

export const RightSide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing.spacingXxs};
  @media (min-width: 960px) {
    flex: 1 1 auto;
  }
  @media (min-width: 1440px) {
    border-radius: ${radius.rounded};
    border: 1px solid ${color.appRegular};
    flex-direction: row;
  }
`;

export const CalculatorForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${spacing.spacingXxs};
  padding: ${spacing.spacingXxs};
  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 326px;
  }
  @media (min-width: 1440px) {
    width: 100px;
    flex: 1 1 auto;
  }
`;

export const CalculationResult = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 326px;
  }
  @media (min-width: 1440px) {
    width: 100px;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ButtonWrapper = styled.div`
  button {
    width: 100%;
    margin-top: ${spacing.spacingXs};
    display: initial;
    font-weight: ${fontWeights.extreme};
    background-color: ${color.appRegular};
    :disabled {
      font-weight: ${fontWeights.extreme};
      color: ${color.light};
    }
    :hover {
      background-color: ${color.appRegular};
    }
  }
`;
