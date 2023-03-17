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
} from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useForm } from 'react-hook-form';
import { ttnRegExp } from 'utils/options';
import HistoryModal from 'components/Modals/HistoryModal';
import { StyledSearchPage, StyledSearchPageResults } from './SearchPage.styled';
import History from 'components/History';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTtn } from 'redux/ttn/ttnOperations';
import { Outlet, useNavigate, useParams } from 'react-router';
import { sellectIsTtnListEmpty } from 'redux/ttn/ttnSellectors';
import { useCustomQueries } from 'hooks';

const SearchPage = () => {
  const [ttnValue, setTtnValue] = useState('');
  const isTtnListEmpty = useSelector(sellectIsTtnListEmpty);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();
  const { ttnId } = useParams();

  useEffect(() => {
    ttnId && setTtnValue(ttnId);

    return () => {
      setTtnValue('');
      reset();
    };
  }, [reset, ttnId]);

  const navigate = useNavigate();

  const { mobile, tablet, desktop } = useCustomQueries();

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
        <Paper sx={{ mt: 3, p: 2 }}>
          {ttnId && !isTtnListEmpty ? (
            <Outlet />
          ) : (
            <>
              <Typography sx={{ mt: 0, mb: 2 }} variant="h6" component="div">
                Інструкція.
              </Typography>
              <Divider />

              <Typography sx={{ mt: 1, mb: 1 }} component="p">
                Для отримання інформації про відправлення введіть ТТН. ТТН номер
                має починатися з символів 1, 2, 5 і містити тільки 14 числових
                знаків!
              </Typography>
            </>
          )}
        </Paper>

        {/* History */}
      </StyledSearchPageResults>
      {mobile && <HistoryModal />}
      {tablet && <History />}
    </StyledSearchPage>
  );
};

export default SearchPage;
