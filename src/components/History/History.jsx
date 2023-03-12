import React from 'react';
import TtnList from 'components/TtnList';
import { Typography } from '@mui/material';
import { StyledHistory } from './History.styled';
// import PropTypes from 'prop-types'

const History = props => {
  return (
    <StyledHistory>
      <Typography sx={{ mt: 0, mb: 2 }} variant="h6" component="div">
        Історія ТТН
      </Typography>

      <TtnList />
    </StyledHistory>
  );
};

// History.propTypes = {}

export default History;
