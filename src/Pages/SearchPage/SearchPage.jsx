import React from 'react';

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
// import PropTypes from 'prop-types';

const SearchPage = props => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const mobile = useMediaQuery('(max-width:767px)');
  const tablet = useMediaQuery('(min-width:768px)');
  const desktop = useMediaQuery('(min-width:1200px)');

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
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box component="div" sx={{ flex: desktop ? '1 1 70%' : '1 1 auto' }}>
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
                  message: 'ТТН не введено',
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
