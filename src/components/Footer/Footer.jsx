import { Typography } from '@mui/material';
import Container from 'components/common/Container';
import React from 'react';
import { StyledFooter, StyledFooterContent } from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledFooterContent>
          <Typography> © Oleksii Lisoviy, 2023</Typography>
          <Typography
            component="a"
            href="http://www.freepik.com"
            sx={{ textDecoration: 'none', color: 'white' }}
          >
            Image in logo designed by Andi Asmara / Freepik
          </Typography>
        </StyledFooterContent>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
