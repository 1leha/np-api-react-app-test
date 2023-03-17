import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@mui/material';

const DummyMessage = ({ children }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </Paper>
  );
};

DummyMessage.propTypes = {
  children: PropTypes.any,
};

export default DummyMessage;
