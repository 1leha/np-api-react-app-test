import Container from 'components/common/Container';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { StyledMain, StyledMainContent } from './Main.styled';
// import PropTypes from 'prop-types'

const Main = () => {
  return (
    <StyledMain>
      <Container>
        <StyledMainContent>{<Outlet />}</StyledMainContent>
      </Container>
    </StyledMain>
  );
};

// Main.propTypes = {}

export default Main;
