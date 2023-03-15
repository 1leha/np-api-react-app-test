import { Divider, Paper } from '@mui/material';
import { useCustomQueries } from 'hooks';
import React from 'react';
import { StyledPostOfficeDetales } from './PostOfficeDetales.styled';
// import PropTypes from 'prop-types'

const PostOfficeDetales = () => {
  const coord = {
    Longitude: '31.250970000000000',
    Latitude: '50.498109000000000',
  };

  const { mobile, tablet, desktop } = useCustomQueries();

  return (
    <Paper elevation={3} sx={{ p: mobile ? 2 : 2 }}>
      <StyledPostOfficeDetales mobile>
        {/* Detales */}
        <div>
          <div>
            <div>
              {tablet && <p>Number</p>}
              <p>WarehouseStatus</p>
            </div>

            <div>
              <p>
                <span>SettlementTypeDescription</span> CityDescription
              </p>
              <p>SettlementAreaDescription</p>
              <p>Відділення: Description</p>
              <p>Максимальний вантаж: TotalMaxWeightAllowed</p>
              <p>Телефон: Phone</p>
            </div>
          </div>

          <div>
            <p>Грфік роботи:</p>
            <p>Понеділок": "10:50-22:00"</p>
            <p>Вівторок": "11:20-22:00</p>
            <p>Середа": "10:50-22:00"</p>
            <p>Четверг": "11:20-22:00"</p>
            <p>П'ятниця": "10:50-22:00"</p>
            <p>Субота": "12:20-22:00</p>
            <p>Неділя": "-"</p>
          </div>
        </div>

        <Divider />

        {/* map */}
        <div>
          <iframe
            title="map"
            src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d714.8815945294691!2d${coord.Longitude}!3d${coord.Latitude}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1678900639639!5m2!1sru!2sua`}
            width="100%"
            height="450"
            // style="border:0;"
            // allowfullscreen=""
            // loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </StyledPostOfficeDetales>
    </Paper>
  );
};

// PostOfficeDetales.propTypes = {}

export default PostOfficeDetales;
