import { Divider, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { sellectCurrentTtn } from 'redux/ttn/ttnSellectors';
import { StyledStatus } from './Status.styled';

const Status = () => {
  const ttnData = useSelector(sellectCurrentTtn);

  return (
    <StyledStatus>
      <Typography sx={{ mt: 0, mb: 2 }} variant="h1" component="div">
        Інформація про відправлення
      </Typography>

      <Divider sx={{ mb: 2 }} />

      {ttnData.StatusCode !== '3' ? (
        <>
          <p>Статус доставки: {ttnData.Status}</p>
          <p>Відправлено:</p>
          <p>{ttnData.WarehouseSender}</p>
          <p>Отримано:</p>
          <p>{ttnData.WarehouseRecipient}</p>
        </>
      ) : (
        <>{ttnData.Status}</>
      )}
    </StyledStatus>
  );
};

export default Status;
