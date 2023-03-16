import styled from 'styled-components';

export const StyledMain = styled.main`
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[4]}px;

  flex: 1 1 auto;

  width: 100%;
`;

export const StyledMainContent = styled.div`
  display: block;
  /* height: 50vh; */
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  /* border: solid 3px; */
  /* background-color: tomato; */
`;
