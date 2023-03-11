import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;

  flex: 0 0 auto;

  height: ${p => p.theme.space[6]}px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};

  color: ${p => p.theme.colors.secondary};
  background-color: ${p => p.theme.colors.brandColor};
`;
