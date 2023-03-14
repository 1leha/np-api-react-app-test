import React, { useState } from 'react';

import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  useMediaQuery,
} from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useForm } from 'react-hook-form';
import { ttnRegExp } from 'utils/options';
import HistoryModal from 'components/Modals/HistoryModal';
import { StyledSearchPage, StyledSearchPageResults } from './SearchPage.styled';
import Status from 'components/Status';
import History from 'components/History';
import { useDispatch } from 'react-redux';
import { fetchTtn } from 'redux/ttn/ttnOperations';
// import PropTypes from 'prop-types';

const SearchPage = props => {
  const [ttnValue, setTtnValue] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();

  const mobile = useMediaQuery('(max-width:767px)');
  const tablet = useMediaQuery('(min-width:768px)');
  const desktop = useMediaQuery('(min-width:1200px)');

  const onReset = () => {
    setTtnValue('');
    reset();
  };

  const onSubmit = async ({ ttn }) => {
    console.log('onSubmit :>> ');
    dispatch(fetchTtn(ttn));
    // navigate('/contacts');
    // console.log('data :>> ', ttn);
    setTtnValue('');
    reset();
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
        {/* <Paper sx={{ p: 2 }}> */}
        <Status />
        {/* </Paper> */}
        {/* History */}
      </StyledSearchPageResults>
      {mobile && <HistoryModal />}
      {tablet && <History />}
    </StyledSearchPage>
  );
};

// Search.propTypes = {};

export default SearchPage;
