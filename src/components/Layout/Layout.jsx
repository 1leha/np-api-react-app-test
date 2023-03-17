import { Box } from 'components/common/Box';
import { FullscreenSpiner } from 'components/common/Spiners/Spiner';
import Header from 'components/Header';
import Main from 'components/Main';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router';

// import PropTypes from 'prop-types'

const Layout = () => {
  return (
    <Box width="100%">
      <Box
        height="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="column"
      >
        <Header />
        <Main>
          {
            <Suspense fallback={<FullscreenSpiner />}>
              <Outlet />
            </Suspense>
          }
        </Main>
        {/* <Footer /> */}
      </Box>
    </Box>
  );
};

// Layout.propTypes = {}

export default Layout;
