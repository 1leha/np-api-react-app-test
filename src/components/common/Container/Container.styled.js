import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin-right: auto;
  margin-left: auto;

  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  width: 100%;

  @media (min-width: 480px) {
    width: 480px;
  }

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1200px) {
    width: 1200px;
  }
`;
