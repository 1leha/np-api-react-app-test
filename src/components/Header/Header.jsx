import { Box } from 'components/common/Box';
import Container from 'components/common/Container';
import React from 'react';
import { StyledHeader } from './Header.styled';
// import PropTypes from 'prop-types'

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Box
          as="nav"
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <div>LOGO</div>
          <div>info icon</div>
        </Box>
      </Container>
    </StyledHeader>
  );
};

// Header.propTypes = {}

export default Header;
