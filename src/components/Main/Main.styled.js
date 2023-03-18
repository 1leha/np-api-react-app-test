import styled from 'styled-components';

export const StyledMain = styled.main`
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;

  margin-bottom: ${p => p.theme.space[3]}px;

  flex: 1 1 auto;

  width: 100%;

  /* 
  display: flex;
  align-items: stretch;
  justify-content: center; */
`;

export const StyledMainContent = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: tomato; */
`;
