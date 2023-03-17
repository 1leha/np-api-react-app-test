import styled from 'styled-components';

export const StyledSearchPage = styled.div`
  display: flex;
  flex-direction: ${p => (p.mediaQuery ? 'row' : 'column')};
  justify-content: space-between;
  gap: ${p => p.theme.space[5]}px;
`;

export const StyledSearchPageResults = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  flex: 1 1 70%;
  width: 100%;
  gap: 10px;

  @media screen and (min-width: 1200px) {
    flex: 1 1 80%;
  }
`;
