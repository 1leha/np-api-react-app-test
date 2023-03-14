import React from 'react';
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { StyledTtnList } from './TtnList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  sellectFiltredTtn,
  sellectIsFilteredTtnListEmpty,
} from 'redux/ttn/ttnSellectors';
import { format } from 'date-fns';
import { styled } from '@mui/material/styles';
import { tooltipClasses } from '@mui/material/Tooltip';
import { removeTtn } from 'redux/ttn/ttnSlice';
import { fetchTtn } from 'redux/ttn/ttnOperations';
import { useNavigate } from 'react-router';

// import PropTypes from 'prop-types'

const TtnList = ({ onClose }) => {
  const filteredTtnList = useSelector(sellectFiltredTtn);
  const dispatch = useDispatch();
  const mobile = useMediaQuery('(max-width:767px)');

  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));

  const isTtnFilteredListEmpty = useSelector(sellectIsFilteredTtnListEmpty);
  const navigate = useNavigate();

  const handleRemove = (e, ttn) => {
    e.stopPropagation();

    dispatch(removeTtn(ttn));
  };

  const handleCheck = ttn => {
    dispatch(fetchTtn(ttn));
    navigate(`/check/${ttn}`);
    mobile && onClose();
  };

  return (
    <StyledTtnList>
      {isTtnFilteredListEmpty ? (
        <Paper sx={{ p: 2 }}>Нічого не знайдено...</Paper>
      ) : (
        <List sx={{ maxHeight: '60vh' }}>
          {filteredTtnList.map(
            ({
              Number,
              requestDate,
              Status,
              RecipientDateTime,
              StatusCode,
            }) => {
              return (
                <li key={Number}>
                  <ListItem
                    sx={{
                      background:
                        StatusCode === '9' ? '#00D1D111' : '#3E3E3E22',
                    }}
                    button
                    onClick={() => handleCheck(Number)}
                    secondaryAction={
                      <Tooltip title="Видалити" arrow>
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={e => handleRemove(e, Number)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    }
                  >
                    <HtmlTooltip
                      title={
                        <React.Fragment>
                          <Typography color="inherit">{Status}</Typography>
                          <b>{RecipientDateTime}</b>
                        </React.Fragment>
                      }
                    >
                      <ListItemText
                        primary={Number}
                        secondary={format(requestDate, 'hh:mm:ss')}
                      />
                    </HtmlTooltip>
                  </ListItem>
                  <Divider />
                </li>
              );
            }
          )}
        </List>
      )}
    </StyledTtnList>
  );
};

// TtnList.propTypes = {}

export default TtnList;
