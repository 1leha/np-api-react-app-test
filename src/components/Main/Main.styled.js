import styled from 'styled-components';

export const StyledMain = styled.main`
  padding-top: ${p => p.theme.space[5]}px;

  flex: 1 1 auto;

  width: 100%;
  /* height: 100%; */
`;

export const StyledMainContent = styled.div`
  display: block;
  /* height: 80vh; */
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  /* background-color: tomato; */
`;
