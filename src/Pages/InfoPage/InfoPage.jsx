import { Divider, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const InfoPage = () => {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography sx={{ mt: 0, mb: 2 }} variant="h6" component="div">
        About
      </Typography>

      <Divider sx={{ mb: 2 }} />

      <Typography sx={{ mt: 1, mb: 2 }} component="p">
        Цей додаток допоможе вам отримати статус вашої посилки, відправленої
        через оператора «Нова Пошта», а також знайти відділення Нової пошти в
        вашому населеному пункті.
      </Typography>

      <Divider sx={{ mb: 2 }} />

      <Typography sx={{ mt: 1, mb: 1 }} variant="h6" component="div">
        Функції:
      </Typography>
      <Box component="ul">
        <Typography sx={{ mt: 0, mb: 2 }} variant="p" component="li">
          Пошук відправлення за ТТН.
        </Typography>
        <Typography sx={{ mt: 0, mb: 2 }} variant="p" component="li">
          Зберігання історії пошуку.
        </Typography>
        <Typography sx={{ mt: 0, mb: 2 }} variant="p" component="li">
          Пошук по історії ТТН.
        </Typography>
        <Typography sx={{ mt: 0, mb: 2 }} variant="p" component="li">
          Видалення як окремого запису в історії, так і усієї історії.
        </Typography>
        <Typography sx={{ mt: 0, mb: 2 }} variant="p" component="li">
          Загальний пошук відділень по базі.
        </Typography>
        <Typography sx={{ mt: 0, mb: 2 }} variant="p" component="li">
          Фільтр відділень за населеним пунктом.
        </Typography>
        <Typography sx={{ mt: 0, mb: 2 }} variant="p" component="li">
          Інформація по конкретному відділенню та його розташування на карті.
        </Typography>
      </Box>

      <Divider sx={{ mb: 2 }} />

      <Typography sx={{ mt: 1, mb: 0 }} component="p" fontSize="small">
        <b>Технології:</b> React, Redux-toolkit, MUI, Axios, Styled Components,
        React-hook-form, Lodash.Debounce, Date-fns.
      </Typography>
    </Paper>
  );
};

export default InfoPage;
