import { Typography } from '@mui/material';
import Container from 'components/common/Container';
import React from 'react';
import { StyledFooter, StyledFooterContent, StyledLink } from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledFooterContent>
          <Typography variant="p"> © Oleksii Lisoviy, 2023</Typography>
          <StyledLink href="http://www.freepik.com">
            Image in logo designed by Andi Asmara / Freepik
          </StyledLink>
        </StyledFooterContent>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
