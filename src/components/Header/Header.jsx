import { Box } from 'components/common/Box';
import Container from 'components/common/Container';
import React from 'react';
import {
  StyledHeader,
  StyledHeaderLogoblock,
  StyledHeaderNav,
  StyledHeaderTabs,
  StyledTab,
} from './Header.styled';
// import PropTypes from 'prop-types'

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderNav>
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
      </StyledHeaderNav>
    </StyledHeader>
  );
};

// Header.propTypes = {}

export default Header;
