import { Autocomplete, Paper, TextField } from '@mui/material';
import DummyMessage from 'components/Dummies/DummyMessage';
import PostOfficeFilter from 'components/PostOfficeFilter';
import PostOfficesLTable from 'components/PostOfficesLTable';
import { useCustomQueries } from 'hooks';
import React, { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { message } from 'utils/messages';
import { StyledFilters, StyledPostOfficesPage } from './PostOfficesPage.styled';
// import PropTypes from 'prop-types'

const PostOfficesPage = () => {
  const [city, setCity] = useState(null);
  const [loadCapacity, setLoadCapacity] = useState(null);

  const { officeId } = useParams();

  const getCity = newCity => {
    setCity(newCity);
    console.log('newCity :>> ', newCity);
  };
  const getCargo = cargo => {
    setLoadCapacity(cargo);
    console.log('cargo :>> ', cargo);
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
            disablePortal
            id="city"
            value={city}
            options={['Київ', 'Харків']}
            renderInput={params => {
              return <TextField {...params} label="Населений пункт" />;
            }}
            onChange={(e, newCity) => getCity(newCity)}
          />

          <Autocomplete
            disablePortal
            id="loadCapacity"
            value={loadCapacity}
            options={['до 30 кг', 'до 1000 кг', 'понад 1000 кг']}
            renderInput={params => <TextField {...params} label="Вантаж" />}
            onChange={(e, cargo) => getCargo(cargo)}
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
