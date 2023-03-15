import {
  Autocomplete,
  Divider,
  Paper,
  TextField,
  useMediaQuery,
} from '@mui/material';
import Filter from 'components/Filter';
import PostOfficeDetales from 'components/PostOfficeDetales';
import PostOfficesLTable from 'components/PostOfficesLTable';
import React, { useState } from 'react';
import { StyledPostOfficesPage } from './PostOfficesPage.styled';
// import PropTypes from 'prop-types'

const PostOfficesPage = () => {
  const [city, setCity] = useState(null);
  const [loadCapacity, setLoadCapacity] = useState(null);

  const getCity = newCity => {
    setCity(newCity);
    console.log('newCity :>> ', newCity);
  };
  const getCargo = cargo => {
    setLoadCapacity(cargo);
    console.log('cargo :>> ', cargo);
  };

  // const mobile = useMediaQuery('(max-width:767px)');
  const tablet = useMediaQuery('(min-width:768px)');
  const desktop = useMediaQuery('(min-width:1200px)');

  return (
    <StyledPostOfficesPage mediaQuery={tablet || desktop}>
      {/* Post Filrer */}
      <Paper elevation={3}>
        {/* Filrer */}
        <div>
          <Filter />
          <Divider />
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
          <Divider />
          <Autocomplete
            disablePortal
            id="loadCapacity"
            value={loadCapacity}
            options={['до 30 кг', 'до 1000 кг', 'понад 1000 кг']}
            renderInput={params => <TextField {...params} label="Вантаж" />}
            onChange={(e, cargo) => getCargo(cargo)}
          />
          <Divider />
        </div>

        {/* Table */}
        <PostOfficesLTable />
      </Paper>

      {/* Post Detales */}

      {tablet && <PostOfficeDetales />}
    </StyledPostOfficesPage>
  );
};

// PostOffices.propTypes = {}

export default PostOfficesPage;
