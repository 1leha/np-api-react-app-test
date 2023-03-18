import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: none;

  color: ${p => p.theme.colors.secondary};

  @media (min-width: 768px) {
    display: block;
    flex: 0 0 3%;
    width: 100%;

    padding-top: ${p => p.theme.space[2]}px;
    padding-bottom: ${p => p.theme.space[2]}px;

    background-color: ${p => p.theme.colors.brandColor};
  }

  @media (min-width: 1200px) {
    padding-top: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const StyledFooterContent = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
