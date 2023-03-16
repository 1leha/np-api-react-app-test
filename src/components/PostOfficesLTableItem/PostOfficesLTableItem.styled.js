import styled from 'styled-components';

export const StyledItemWrapper = styled.div`
  display: flex;
  gap: ${p => p.theme.space[4]}px;
`;

export const StyledPostNumber = styled.p`
  flex: 0 0 25%;

  margin: ${p => p.theme.space[0]}px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[3]}px;

  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};

  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.primaryLight};
`;

export const StyledItemDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[1]}px;

  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
`;

export const StyledItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[1]}px;

  margin: ${p => p.theme.space[0]}px;
`;
