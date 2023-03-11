import Container from 'components/common/Container';
import React from 'react';
import { StyledFooter, StyledFooterContent } from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledFooterContent>© Oleksii Lisoviy, 2023</StyledFooterContent>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
