import styled from 'styled-components';

export const StyledPostOfficesPage = styled.div`
  display: flex;
  flex-direction: ${p => (p.mediaQuery ? 'row' : 'column')};
  justify-content: space-between;
  gap: ${p => p.theme.space[4]}px;
`;

export const StyledFilters = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${p => p.theme.space[4]}px;

  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const StyledAutocompleteListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${p => p.theme.space[4]}px;

  color: ${p => p.theme.colors.primary};
`;
