import { Paper } from '@mui/material';
import styled from 'styled-components';

export const StyledPostOfficeDetales = styled.div`
  display: flex;
  flex-direction: ${p => (p.tablet ? 'row' : 'column')};
  justify-content: space-between;
  /* width: 100%; */
  gap: ${p => p.theme.space[5]}px;

  background-color: tomato;
  /* border: 3px solid red; */
`;
