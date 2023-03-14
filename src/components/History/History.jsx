import React from 'react';
import TtnList from 'components/TtnList';
import { Paper } from '@mui/material';
import { StyledHistory } from './History.styled';
import HistoryHeader from './HistoryHeader/HistoryHeader';
import { useSelector } from 'react-redux';
import { sellectIsTtnListEmpty } from 'redux/ttn/ttnSellectors';
// import PropTypes from 'prop-types'

const History = () => {
  const isTtnListEmpty = useSelector(sellectIsTtnListEmpty);

  return (
    <StyledHistory>
      {/* <Paper elevation={5} sx={{ height: '100%' }}> */}
      <HistoryHeader />
      <Paper
        sx={{
          overflowY: 'scroll',
        }}
      >
        {/* <TtnList /> */}
        {isTtnListEmpty ? (
          <Paper sx={{ p: 2 }}>Історія відсутня...</Paper>
        ) : (
          <TtnList />
        )}
      </Paper>
      {/* </Paper> */}
    </StyledHistory>
  );
};

// History.propTypes = {}

export default History;
