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
  sellectNormalisedCity,
} from 'redux/postOffices/postOfficeSellectors';
import { message } from 'utils/messages';
import {
  StyledAutocompleteListItem,
  StyledFilters,
  StyledPostOfficesPage,
} from './PostOfficesPage.styled';
// import PropTypes from 'prop-types'

const PostOfficesPage = () => {
  const [city, setCity] = useState(null);
  const [loadCapacity, setLoadCapacity] = useState(null);
  const dispatch = useDispatch();
  const { officeId } = useParams();

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  const allCities = useSelector(sellectCity);
  const normalisedCity = useSelector(sellectNormalisedCity);
  // console.log('allCities :>> ', allCities.length);
  // console.log('normalisedCity :>> ', normalisedCity);

  const getCity = newCity => {
    setCity(newCity);
    console.log('newCity :>> ', newCity);
  };
  const getCargo = cargo => {
    setLoadCapacity(cargo);
    console.log('cargo :>> ', cargo);
  };

  const defaultProps = {
    options: allCities,
    getOptionLabel: city => city.Ref,
  };

  const { mobile, tablet, desktop } = useCustomQueries();

  return (
    <StyledPostOfficesPage mediaQuery={tablet || desktop}>
      {/* Post Filrer */}
      <Paper elevation={3} sx={{ flex: desktop ? '1 1 30%' : '1 1 50%', p: 2 }}>
        {/* Filrer */}
        <StyledFilters>
          <PostOfficeFilter />

          <Autocomplete
            // disablePortal
            // {...defaultProps}
            // autoComplete
            clearOnEscape
            filterSelectedOptions
            id="city"
            value={city}
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
            renderInput={params => {
              return <TextField {...params} label="Населений пункт" />;
            }}
            onChange={(_, newCity) => getCity(newCity)}
          />

          <Autocomplete
            disablePortal
            id="loadCapacity"
            value={loadCapacity}
            options={['до 30 кг', 'до 1000 кг', 'понад 1000 кг']}
            renderInput={params => <TextField {...params} label="Вантаж" />}
            onChange={(_, cargo) => getCargo(cargo)}
          />
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
