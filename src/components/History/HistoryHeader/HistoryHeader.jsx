import React from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ClearAllIcon from '@mui/icons-material/ClearAll';

import Filter from 'components/Filter';
import { useDispatch } from 'react-redux';
import { removeAllTtn } from 'redux/ttn/ttnSlice';

const HistoryHeader = ({ onClose }) => {
  const dispatch = useDispatch();

  // media queries
  const mobile = useMediaQuery('(max-width:767px)');
  const tablet = useMediaQuery('(min-width:768px)');
  // const desktop = useMediaQuery('(min-width:1200px)');

  const handleClearAll = () => {
    dispatch(removeAllTtn());
    mobile && onClose();
  };

  return (
    <AppBar component="div" sx={{ position: 'relative' }}>
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
      </Toolbar>
      <Filter />
    </AppBar>
  );
};

export default HistoryHeader;
