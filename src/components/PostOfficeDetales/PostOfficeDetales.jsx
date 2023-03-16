import { Paper, Typography } from '@mui/material';
import DummyMessage from 'components/Dummies';
import { useCustomQueries } from 'hooks';
import React from 'react';
import { useParams } from 'react-router-dom';
import { message } from 'utils/messages';
import {
  StyledCityType,
  StyledDetales,
  StyledDetalesInfo,
  StyledMap,
  StyledMapWrapper,
  StyledMaxWeight,
  StyledNumberStatusWrapper,
  StyledOfficeDescriptionWrapper,
  StyledOfficePhone,
  StyledPostOfficeDetalesWrapper,
  StyledPostOfficeNumber,
  StyledPostOfficeStatus,
  StyledWeekDay,
  StyledWorkHoursItem,
  StyledWorkHoursList,
  StyledWorkHoursWrapper,
  StyledWorkTime,
} from './PostOfficeDetales.styled';
// import PropTypes from 'prop-types'

const PostOfficeDetales = () => {
  const coord = {
    Longitude: '31.250970000000000',
    Latitude: '50.498109000000000',
  };
  const postOfficeId = useParams();
  console.log('postOfficeId :>> ', postOfficeId);

  const postData = true;
  const { mobile, tablet, desktop } = useCustomQueries();

  return postData ? (
    <Paper
      elevation={3}
      sx={{ pb: 0, flex: tablet || desktop ? '1 1 60%' : '1 1 auto' }}
    >
      <StyledPostOfficeDetalesWrapper mobile>
        {/* Detales */}
        <StyledDetales>
          <StyledDetalesInfo>
            <StyledNumberStatusWrapper tablet>
              {tablet && (
                <StyledPostOfficeNumber>Number</StyledPostOfficeNumber>
              )}
              <StyledPostOfficeStatus>WarehouseStatus</StyledPostOfficeStatus>
            </StyledNumberStatusWrapper>

            <StyledOfficeDescriptionWrapper>
              <p>
                <StyledCityType>SettlementTypeDescription</StyledCityType>{' '}
                CityDescription
              </p>
              <p>SettlementAreaDescription</p>
              <p>Відділення: Description</p>
              <p>
                Максимальний вантаж:{' '}
                <StyledMaxWeight>TotalMaxWeightAllowed</StyledMaxWeight>
              </p>
              <p>
                Телефон: <StyledOfficePhone>Phone</StyledOfficePhone>
              </p>
            </StyledOfficeDescriptionWrapper>
          </StyledDetalesInfo>

          {/* work time */}
          <StyledWorkHoursWrapper>
            <Typography
              sx={{ mb: 2, lineHeight: 1.1 }}
              variant="h6"
              component="div"
            >
              Графік роботи:
            </Typography>

            <StyledWorkHoursList>
              <StyledWorkHoursItem>
                <StyledWeekDay>Понеділок:</StyledWeekDay>
                <StyledWorkTime>10:50-22:00</StyledWorkTime>
              </StyledWorkHoursItem>
              <StyledWorkHoursItem>
                <StyledWeekDay>Вівторок:</StyledWeekDay>
                <StyledWorkTime>11:20-22:00</StyledWorkTime>
              </StyledWorkHoursItem>
              <StyledWorkHoursItem>
                <StyledWeekDay>Середа:</StyledWeekDay>
                <StyledWorkTime>10:50-22:00</StyledWorkTime>
              </StyledWorkHoursItem>
              <StyledWorkHoursItem>
                <StyledWeekDay>Четверг:</StyledWeekDay>
                <StyledWorkTime>11:20-22:00</StyledWorkTime>
              </StyledWorkHoursItem>
              <StyledWorkHoursItem>
                <StyledWeekDay>П'ятниця:</StyledWeekDay>
                <StyledWorkTime>10:50-22:00</StyledWorkTime>
              </StyledWorkHoursItem>
              <StyledWorkHoursItem>
                <StyledWeekDay>Субота:</StyledWeekDay>
                <StyledWorkTime>12:20-22:00</StyledWorkTime>
              </StyledWorkHoursItem>
              <StyledWorkHoursItem>
                <StyledWeekDay>Неділя:</StyledWeekDay>
                <StyledWorkTime>-</StyledWorkTime>
              </StyledWorkHoursItem>
            </StyledWorkHoursList>
          </StyledWorkHoursWrapper>
        </StyledDetales>

        {/* <Divider /> */}

        {/* map */}
        <StyledMapWrapper>
          <StyledMap
            title="map"
            src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d714.8815945294691!2d${coord.Longitude}!3d${coord.Latitude}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1678900639639!5m2!1sru!2sua`}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></StyledMap>
        </StyledMapWrapper>
      </StyledPostOfficeDetalesWrapper>
    </Paper>
  ) : (
    <DummyMessage>{message.noPostOfficeData}</DummyMessage>
  );
};

// PostOfficeDetales.propTypes = {}

export default PostOfficeDetales;
