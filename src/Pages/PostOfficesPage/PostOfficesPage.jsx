import { Autocomplete, Box, Paper, TextField } from '@mui/material';
import DummyMessage from 'components/Dummies/DummyMessage';
import PostOfficeFilter from 'components/PostOfficeFilter';
import PostOfficesLTable from 'components/PostOfficesLTable';
import { useCustomQueries } from 'hooks';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import { fetchCities } from 'redux/postOffices/City/cityOperations';
import {
  sellectCity,
  sellectCityIsLoading,
  sellectCurrentQuery,
} from 'redux/postOffices/postOfficeSellectors';
import { message } from 'utils/messages';
import { StyledFilters, StyledPostOfficesPage } from './PostOfficesPage.styled';
import CircularProgress from '@mui/material/CircularProgress';
import { fetchPostOffice } from 'redux/postOffices/postOfficeOperations';
import {
  setcargoCapacity,
  setCityRef,
} from 'redux/postOffices/postOfficeSlice';
import { CARGO_LOAD } from 'utils/options';

// import PropTypes from 'prop-types'

const PostOfficesPage = () => {
  const [city, setCity] = useState(null);
  const [open, setOpen] = useState(false);
  const [loadCapacity, setLoadCapacity] = useState(null);
  const dispatch = useDispatch();
  const { officeId } = useParams();
  const allCities = useSelector(sellectCity);
  const cityIsLoading = useSelector(sellectCityIsLoading);
  const currentQuery = useSelector(sellectCurrentQuery);

  useEffect(() => {
    dispatch(fetchPostOffice(currentQuery));
  }, [currentQuery, dispatch]);

  const getCity = newCity => {
    setCity(newCity);
    if (!newCity) {
      dispatch(setCityRef(''));
      return;
    }

    dispatch(setCityRef(newCity.Ref));
  };

  const getCargo = cargo => {
    const weight = cargo?.id ? cargo.id : 0;

    dispatch(setcargoCapacity(weight));
    setLoadCapacity(cargo?.label ? cargo.label : null);
  };

  const { tablet, desktop } = useCustomQueries();

  return (
    <StyledPostOfficesPage mediaQuery={tablet || desktop}>
      {/* Post Filrer */}
      <Paper elevation={3} sx={{ flex: desktop ? '1 1 30%' : '1 1 50%', p: 2 }}>
        {/* Filrer */}
        <StyledFilters>
          <PostOfficeFilter />

          <Autocomplete
            disablePortal
            autoComplete
            clearOnEscape
            filterSelectedOptions
            id="city"
            value={city}
            open={open}
            onOpen={() => {
              setOpen(true);
              if (allCities.length === 0) dispatch(fetchCities());
            }}
            onClose={() => {
              setOpen(false);
            }}
            loading={cityIsLoading}
            options={allCities.map(({ Ref, Description }) => ({
              Ref,
              label: Description,
            }))}
            renderOption={(props, option) => {
              // console.log(option);
              return (
                <Box component="li" {...props} key={option.Ref}>
                  {option.label}
                </Box>
              );
            }}
            isOptionEqualToValue={(option, value) =>
              option.title === value.title
            }
            renderInput={params => {
              return (
                <TextField
                  {...params}
                  label={message.allPostOffices}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {cityIsLoading ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </>
                    ),
                  }}
                />
              );
            }}
            onChange={(_, newCity) => getCity(newCity)}
          />

          {/* <Autocomplete
            disablePortal
            autoComplete
            clearOnEscape
            id="loadCapacity"
            value={loadCapacity}
            options={CARGO_LOAD}
            renderInput={params => (
              <TextField {...params} label={message.cargoCapasity} />
            )}
            onChange={(_, option) => getCargo(option)}
            isOptionEqualToValue={(option, value) =>
              option.title === value.title
            }
          /> */}
        </StyledFilters>

        {/* Table */}
        <PostOfficesLTable />
      </Paper>

      {/* Post Detales */}

      {tablet &&
        (officeId ? (
          <Outlet />
        ) : (
          <DummyMessage>{message.noPostOfficeData}</DummyMessage>
        ))}
    </StyledPostOfficesPage>
  );
};

// PostOffices.propTypes = {}

export default PostOfficesPage;
