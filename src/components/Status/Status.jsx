import { Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { sellectCurrentTtn } from 'redux/ttn/ttnSellectors';
import { StyledStatus } from './Status.styled';
// import PropTypes from 'prop-types'

const Status = () => {
  const { Status, StatusCode, WarehouseSender, WarehouseRecipient } =
    useSelector(sellectCurrentTtn);

  return (
    <StyledStatus>
      <Typography sx={{ mt: 3, mb: 2 }} variant="h6" component="div">
        Інформація про відправлення
      </Typography>

      {StatusCode !== '3' ? (
        <>
          <p>Статус доставки: {Status}</p>
          <p>Відправлено:</p>
          <p>{WarehouseSender}</p>
          <p>Отримано:</p>
          <p>{WarehouseRecipient}</p>
        </>
      ) : (
        <>{Status}</>
      )}
    </StyledStatus>
  );
};

// Status.propTypes = {}

export default Status;
