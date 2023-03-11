import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: none;

  @media (min-width: 768px) {
    display: block;
    flex: 0 0 auto;

    padding-top: ${p => p.theme.space[4]}px;
    padding-bottom: ${p => p.theme.space[4]}px;
  }

  @media (min-width: 1200px) {
    padding-top: ${p => p.theme.space[5]}px;
    padding-bottom: ${p => p.theme.space[5]}px;
  }
`;

export const StyledFooterContent = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
`;
