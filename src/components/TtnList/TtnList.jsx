import React from 'react';
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { StyledTtnList } from './TtnList.styled';
// import PropTypes from 'prop-types'

const TtnList = props => {
  return (
    <StyledTtnList>
      <List>
        <ListItem
          button
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText primary="20400048799001" secondary="Titania" />
        </ListItem>

        <Divider />

        <ListItem
          button
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText primary="20400048799001" secondary="Tethys" />
        </ListItem>
      </List>
    </StyledTtnList>
  );
};

// TtnList.propTypes = {}

export default TtnList;
