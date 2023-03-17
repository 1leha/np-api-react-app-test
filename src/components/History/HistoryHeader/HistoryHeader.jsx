import React from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ClearAllIcon from '@mui/icons-material/ClearAll';

import Filter from 'components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { removeAllTtn } from 'redux/ttn/ttnSlice';
import { sellectIsTtnListEmpty } from 'redux/ttn/ttnSellectors';
import { useNavigate } from 'react-router-dom';
import { useCustomQueries } from 'hooks';

const HistoryHeader = ({ onClose }) => {
  const dispatch = useDispatch();
  const isTtnListEmpty = useSelector(sellectIsTtnListEmpty);
  const navigate = useNavigate();

  // media queries
  const { mobile, tablet } = useCustomQueries();

  const handleClearAll = () => {
    dispatch(removeAllTtn());
    navigate(`/check`);

    mobile && onClose();
  };

  return (
    <>
      <AppBar
        component="div"
        sx={{
          position: 'relative',
          backgroundColor: '#008BD1',
          width: '100%',
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
            sx={{ display: tablet && 'none' }}
          >
            <CloseIcon />
          </IconButton>

          {/* History Header */}
          <Typography
            sx={{ ml: mobile && 2, flex: 1 }}
            variant="h6"
            component="div"
          >
            Історія ТТН
          </Typography>

          {!isTtnListEmpty && (
            <Tooltip title="Видалити усі ТТН" arrow>
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleClearAll}
                aria-label="close"
              >
                <ClearAllIcon />
              </IconButton>
            </Tooltip>
          )}
        </Toolbar>
      </AppBar>

      {!isTtnListEmpty && <Filter />}
    </>
  );
};

export default HistoryHeader;
