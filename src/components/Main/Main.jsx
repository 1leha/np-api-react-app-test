import Container from 'components/common/Container';
import React from 'react';
import { StyledMain, StyledMainContent } from './Main.styled';
// import PropTypes from 'prop-types'

const Main = ({ children }) => {
  return (
    <StyledMain>
      <Container>
        <StyledMainContent>{children}</StyledMainContent>
      </Container>
    </StyledMain>
  );
};

// Main.propTypes = {}

export default Main;
