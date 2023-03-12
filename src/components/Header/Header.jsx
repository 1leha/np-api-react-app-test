import { Box } from 'components/common/Box';
import Container from 'components/common/Container';
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  StyledHeader,
  StyledHeaderLogoblock,
  StyledHeaderTabs,
  StyledTab,
} from './Header.styled';
// import PropTypes from 'prop-types'

const Header = () => {
  return (
    <StyledHeader>
      <Box
        as="nav"

        // position="relative"
      >
        <Box bg="brandColor" mb={4}>
          <Container>
            <StyledHeaderLogoblock>
              <div>New Post</div>
              <div>info</div>
            </StyledHeaderLogoblock>
          </Container>
        </Box>
        <Container>
          <StyledHeaderTabs>
            <StyledTab to={'/'}>Перевірити ТТН</StyledTab>
            <StyledTab to={'/post-office'}>Список відділень</StyledTab>
          </StyledHeaderTabs>
        </Container>
      </Box>
    </StyledHeader>
  );
};

// Header.propTypes = {}

export default Header;
