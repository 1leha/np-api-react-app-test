import React, { useEffect, useState } from 'react';

import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useForm } from 'react-hook-form';
import { ttnRegExp } from 'utils/options';
import HistoryModal from 'components/Modals/HistoryModal';
import { StyledSearchPage, StyledSearchPageResults } from './SearchPage.styled';
// import Status from 'components/Status';
import History from 'components/History';
import { useDispatch } from 'react-redux';
import { fetchTtn } from 'redux/ttn/ttnOperations';
import { Outlet, useNavigate, useParams } from 'react-router';
// import PropTypes from 'prop-types';

const SearchPage = () => {
  const [ttnValue, setTtnValue] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();
  const { ttnId } = useParams();

  // console.log('ttnId :>> ', ttnId);

  useEffect(() => {
    setTtnValue(ttnId);

    return () => {
      setTtnValue('');
      reset();
    };
  }, [reset, ttnId]);

  const navigate = useNavigate();

  const mobile = useMediaQuery('(max-width:767px)');
  const tablet = useMediaQuery('(min-width:768px)');
  const desktop = useMediaQuery('(min-width:1200px)');

  const onReset = () => {
    setTtnValue('');
    reset();
    navigate(`/check`);
  };

  const onSubmit = async ({ ttn }) => {
    dispatch(fetchTtn(ttn));
    navigate(`/check/${ttn}`);
  };

  const handlerInput = e => {
    // console.log('isNaN >>> ', Number.isNaN(+e.target.value));
    // console.log('value >>> ', e.target.value.length);
    // console.log('ttnValue >>> ', ttnValue.length);
    if (e.target.value.length > 14 || Number.isNaN(+e.target.value)) {
      e.target.value = ttnValue;
      return;
    }
    setTtnValue(e.target.value.trim());
  };

  return (
    <StyledSearchPage mediaQuery={tablet || desktop}>
      <StyledSearchPageResults>
        {/* Form */}
        <Box
          component="form"
          sx={{
            '& > :not(style)': { mb: 4 },
            mt: 0,
            display: desktop ? 'flex' : 'block',
            gap: 2,
          }}
          noValidate
          autoComplete="on"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box component="div" sx={{ flex: desktop ? '1 1 70%' : '1 1 auto' }}>
            <TextField
              fullWidth
              required
              id="ttn"
              name="ttn"
              // type="number"
              label="Введіть ТТН"
              variant="outlined"
              value={ttnValue}
              {...register('ttn', {
                required: {
                  value: true,
                  message: 'ТТН не введено',
                },
                pattern: {
                  value: ttnRegExp,
                  message:
                    'Номер має починатися з чисел: 1, 2, 5, та бути довжиной 14 символів!',
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
              onInput={handlerInput}
            />
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="outlined"
            size={mobile || tablet ? 'large' : 'medium'}
            sx={{
              flex: desktop ? '1 1 30%' : '1 1 auto',
              height: '56px',
            }}
          >
            Отримати статус за ТТН
          </Button>
        </Box>
        <Divider />

        {/* Result */}

        {/* <Status /> */}
        {ttnId ? (
          <Outlet />
        ) : (
          <Paper sx={{ mt: 3, p: 2 }}>
            <Typography sx={{ mt: 0, mb: 2 }} variant="h6" component="div">
              Інструкція.
            </Typography>
            <Divider />

            <Typography sx={{ mt: 1, mb: 1 }} component="p">
              Для отримання інформації про відправлення введіть ТТН. ТТН номер
              має починатися з символів 1, 2, 5 і містити тільки 14 числових
              знаків!
            </Typography>
          </Paper>
        )}

        {/* History */}
      </StyledSearchPageResults>
      {mobile && <HistoryModal />}
      {tablet && <History />}
    </StyledSearchPage>
  );
};

// Search.propTypes = {};

export default SearchPage;
