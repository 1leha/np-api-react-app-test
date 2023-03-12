import { Typography } from '@mui/material';
import React from 'react';
import { StyledStatus } from './Status.styled';
// import PropTypes from 'prop-types'

const Status = props => {
  return (
    <StyledStatus>
      <Typography sx={{ mt: 0, mb: 2 }} variant="h6" component="div">
        Інформація про відправлення
      </Typography>

      <p>Статус доставки: Отримано</p>
      <p>Відправлено:</p>
      <p>Відділення №17 (до 30 кг): вул. Розумовська, 29</p>
      <p>Отримано:</p>
      <p>Відділення №13 (до 30 кг): просп. Гагаріна, 43</p>
    </StyledStatus>
  );
};

// Status.propTypes = {}

export default Status;
