import { Box } from 'components/common/Box';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Main from 'components/Main';
import React from 'react';

// import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  return (
    <Box width="100%" height="98vh">
      <Box
        height="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="column"
      >
        <Header />
        <Main />
        <Footer />
      </Box>
    </Box>
  );
};

// Layout.propTypes = {}

export default Layout;
