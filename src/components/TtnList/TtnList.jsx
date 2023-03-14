import React from 'react';
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Tooltip,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { StyledTtnList } from './TtnList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { sellectTtn } from 'redux/ttn/ttnSellectors';
import { format } from 'date-fns';
import { styled } from '@mui/material/styles';
import { tooltipClasses } from '@mui/material/Tooltip';
import { removeTtn } from 'redux/ttn/ttnSlice';

// import PropTypes from 'prop-types'

const TtnList = () => {
  const ttnList = useSelector(sellectTtn);
  const dispatch = useDispatch();

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

  return (
    <StyledTtnList>
      <List sx={{ maxHeight: '60vh' }}>
        {ttnList.map(
          ({ Number, requestDate, Status, RecipientDateTime, StatusCode }) => {
            return (
              <li key={Number}>
                <ListItem
                  sx={{
                    background: StatusCode === '9' ? '#00D1D111' : '#3E3E3E22',
                  }}
                  button
                  secondaryAction={
                    <Tooltip title="Видалити" arrow>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => {
                          dispatch(removeTtn(Number));
                        }}
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
    </StyledTtnList>
  );
};

// TtnList.propTypes = {}

export default TtnList;
