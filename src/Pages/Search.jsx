import React from 'react';

import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
} from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useForm } from 'react-hook-form';
import { ttnRegExp } from 'utils/options';
// import PropTypes from 'prop-types';

const Search = props => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async data => {
    // await dispatch(login(data)).unwrap();
    // navigate('/contacts');
    console.log('data :>> ', data);
    reset();
  };

  const onReset = () => {
    reset();
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { mb: 2 },
          mb: 3,
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box component="div" sx={{ position: 'relative' }}>
          <TextField
            fullWidth
            id="ttn"
            name="ttn"
            type="number"
            label="Введіть ТТН"
            variant="outlined"
            maxLength="14"
            {...register('ttn', {
              required: {
                value: true,
                message: 'Введіть ТТН',
              },
              pattern: {
                value: ttnRegExp,
                message: 'Номер має бути розміром 14 символів',
              },
            })}
            error={!!errors.ttn}
            helperText={errors.ttn?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {
                    <IconButton
                      onClick={onReset}
                      type="reset"
                      aria-label="clear"
                      size="small"
                    >
                      <HighlightOffIcon fontSize="large" />
                    </IconButton>
                  }
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Button type="submit" fullWidth variant="outlined">
          Отримати статус за ТТН
        </Button>
      </Box>

      <Paper sx={{ p: 2 }}>
        <p>Статус доставки: Одержано </p>
        <p>Відправлено:</p>
        <p>Відділення №17 (до 30 кг): вул. Розумовська, 29</p>
        <p>Отримано:</p>
        <p>Відділення №13 (до 30 кг): просп. Гагаріна, 43</p>
      </Paper>
    </>
  );
};

// Search.propTypes = {};

export default Search;
