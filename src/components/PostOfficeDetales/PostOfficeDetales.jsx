import { Paper, Typography } from '@mui/material';
import { useCustomQueries } from 'hooks';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { sellectPostOffice } from 'redux/postOffices/postOfficeSellectors';
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

const PostOfficeDetales = () => {
  const [sellectedPostOffice, setSellectedPostOffice] = useState(null);
  const { officeId } = useParams();
  const postOffices = useSelector(sellectPostOffice);
  const { tablet, desktop } = useCustomQueries();

  const [activePostOffice] = postOffices.filter(
    office => office.Ref === officeId
  );

  useEffect(() => {
    setSellectedPostOffice(activePostOffice);
  }, [officeId, activePostOffice]);

  if (!sellectedPostOffice) {
    return;
  }

  const {
    Number,
    WarehouseStatus,
    SettlementTypeDescription,
    CityDescription,
    SettlementAreaDescription,
    Description,
    TotalMaxWeightAllowed,
    Phone,
    Reception: {
      Monday,
      Tuesday,
      Wednesday,
      Thursday,
      Friday,
      Saturday,
      Sunday,
    },
    Longitude,
    Latitude,
  } = sellectedPostOffice;

  return (
    <Paper
      elevation={0}
      sx={{
        pb: 0,
        flex: tablet || desktop ? '1 1 50%' : '1 1 auto',
        height: '100%',
      }}
    >
      {sellectedPostOffice && (
        <StyledPostOfficeDetalesWrapper mobile>
          {/* Detales */}
          <StyledDetales>
            <StyledDetalesInfo>
              <StyledNumberStatusWrapper tablet>
                {tablet && (
                  <StyledPostOfficeNumber>№{Number}</StyledPostOfficeNumber>
                )}
                <StyledPostOfficeStatus>
                  {WarehouseStatus}
                </StyledPostOfficeStatus>
              </StyledNumberStatusWrapper>

              <StyledOfficeDescriptionWrapper>
                <p>
                  <StyledCityType>{SettlementTypeDescription}</StyledCityType>
                  {CityDescription}
                </p>
                <p>{SettlementAreaDescription}</p>
                <p>Відділення: {Description}</p>
                <p>
                  Максимальний вантаж:{' '}
                  <StyledMaxWeight>{TotalMaxWeightAllowed}</StyledMaxWeight>
                </p>
                <p>
                  Телефон: <StyledOfficePhone>{Phone}</StyledOfficePhone>
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
                  <StyledWorkTime>{Monday}</StyledWorkTime>
                </StyledWorkHoursItem>
                <StyledWorkHoursItem>
                  <StyledWeekDay>Вівторок:</StyledWeekDay>
                  <StyledWorkTime>{Tuesday}</StyledWorkTime>
                </StyledWorkHoursItem>
                <StyledWorkHoursItem>
                  <StyledWeekDay>Середа:</StyledWeekDay>
                  <StyledWorkTime>{Wednesday}</StyledWorkTime>
                </StyledWorkHoursItem>
                <StyledWorkHoursItem>
                  <StyledWeekDay>Четверг:</StyledWeekDay>
                  <StyledWorkTime>{Thursday}</StyledWorkTime>
                </StyledWorkHoursItem>
                <StyledWorkHoursItem>
                  <StyledWeekDay>П'ятниця:</StyledWeekDay>
                  <StyledWorkTime>{Friday}</StyledWorkTime>
                </StyledWorkHoursItem>
                <StyledWorkHoursItem>
                  <StyledWeekDay>Субота:</StyledWeekDay>
                  <StyledWorkTime>{Saturday}</StyledWorkTime>
                </StyledWorkHoursItem>
                <StyledWorkHoursItem>
                  <StyledWeekDay>Неділя:</StyledWeekDay>
                  <StyledWorkTime>{Sunday}</StyledWorkTime>
                </StyledWorkHoursItem>
              </StyledWorkHoursList>
            </StyledWorkHoursWrapper>
          </StyledDetales>

          {/* <Divider /> */}

          {/* map */}
          <StyledMapWrapper>
            <StyledMap
              title="map"
              src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d714.8815945294691!2d${Longitude}!3d${Latitude}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1678900639639!5m2!1sru!2sua`}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></StyledMap>
          </StyledMapWrapper>
        </StyledPostOfficeDetalesWrapper>
      )}
    </Paper>
  );
};

export default PostOfficeDetales;
