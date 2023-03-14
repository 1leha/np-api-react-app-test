import React from 'react';
import TtnList from 'components/TtnList';
import { Paper } from '@mui/material';
import { StyledHistory } from './History.styled';
import HistoryHeader from './HistoryHeader/HistoryHeader';
// import PropTypes from 'prop-types'

const History = () => {
  return (
    <StyledHistory>
      <Paper elevation={3} sx={{ height: '100%' }}>
        <HistoryHeader />
        <Paper sx={{ overflowY: 'scroll' }}>
          <TtnList />
        </Paper>
      </Paper>
    </StyledHistory>
  );
};

// History.propTypes = {}

export default History;
