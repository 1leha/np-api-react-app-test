import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@mui/material';
import { useCustomQueries } from 'hooks';

const DummyMessage = ({ children }) => {
  const { tablet, desktop } = useCustomQueries();

  return (
    <Paper
      elevation={3}
      sx={{
        flex: tablet || desktop ? '1 1 70%' : '1 1 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
