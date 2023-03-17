import React from 'react';
import { List, Paper } from '@mui/material';
import { StyledTtnList } from './TtnList.styled';
import { useSelector } from 'react-redux';
import {
  sellectFiltredTtn,
  sellectIsFilteredTtnListEmpty,
} from 'redux/ttn/ttnSellectors';
import { message } from 'utils/messages';
import TtnItem from './TtnItem';
import PropTypes from 'prop-types';

const TtnList = ({ onClose }) => {
  const filteredTtnList = useSelector(sellectFiltredTtn);
  const isTtnFilteredListEmpty = useSelector(sellectIsFilteredTtnListEmpty);

  return (
    <StyledTtnList>
      {isTtnFilteredListEmpty ? (
        <Paper sx={{ p: 2 }}>{message.noSearchData}</Paper>
      ) : (
        <List>
          {filteredTtnList.map(ttn => {
            return <TtnItem key={ttn.Number} data={ttn} onClose={onClose} />;
          })}
        </List>
      )}
    </StyledTtnList>
  );
};

TtnList.propTypes = { onClose: PropTypes.func };

export default TtnList;
