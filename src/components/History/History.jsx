import React from 'react';
import TtnList from 'components/TtnList';
import { Paper } from '@mui/material';
import { StyledHistory } from './History.styled';
import HistoryHeader from './HistoryHeader/HistoryHeader';
import { useSelector } from 'react-redux';
import { sellectIsTtnListEmpty } from 'redux/ttn/ttnSellectors';
import { message } from 'utils/messages';

const History = () => {
  const isTtnListEmpty = useSelector(sellectIsTtnListEmpty);

  return (
    <StyledHistory>
      <HistoryHeader />
      <Paper
        sx={{
          overflowY: 'scroll',
        }}
      >
        {isTtnListEmpty ? (
          <Paper sx={{ p: 2 }}>{message.historyIsEmpty}</Paper>
        ) : (
          <TtnList />
        )}
      </Paper>
    </StyledHistory>
  );
};

export default History;
