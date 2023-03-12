import React from 'react';
import TtnList from 'components/TtnList';
import { Paper } from '@mui/material';
import { StyledHistory } from './History.styled';
import HistoryHeader from './HistoryHeader/HistoryHeader';
// import PropTypes from 'prop-types'

const History = props => {
  return (
    <StyledHistory>
      <Paper elevation={3} sx={{ overflow: 'hidden' }}>
        <HistoryHeader />
        <TtnList />
      </Paper>
    </StyledHistory>
  );
};

// History.propTypes = {}

export default History;
