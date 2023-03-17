import { Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Oval } from 'react-loader-spinner';

export const FullscreenSpiner = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Oval
        height={40}
        width={40}
        color="#8b8b8b"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#8b8b8b"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    </Paper>
  );
};

export const LocaleSpiner = () => {
  return (
    <Box
      sx={{
        // width: '100vw',
        // height: '100vh',
        display: 'inline-block',
        alignItems: 'center',
        textAlign: 'right',
        p: 3,
      }}
    >
      <Oval
        height={20}
        width={20}
        color="#8b8b8b"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#8b8b8b"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    </Box>
  );
};
