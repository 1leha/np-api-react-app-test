import styled from 'styled-components';

export const StyledPostOfficesPage = styled.div`
  display: flex;
  flex-direction: ${p => (p.mediaQuery ? 'row' : 'column')};
  justify-content: space-between;
  /* width: 100%; */
  gap: ${p => p.theme.space[5]}px;

  /* background-color: tomato; */
  /* border: 3px solid red; */
`;
