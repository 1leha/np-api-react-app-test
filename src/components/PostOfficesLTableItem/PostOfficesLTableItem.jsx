import React from 'react';
import {
  StyledItem,
  StyledItemDataWrapper,
  StyledItemWrapper,
  StyledPostNumber,
} from './PostOfficesLTableItem.styled';
import PropTypes from 'prop-types';

const PostOfficesLTableItem = ({ data }) => {
  return (
    <StyledItemWrapper>
      <StyledPostNumber>{data?.Number}</StyledPostNumber>
      <StyledItemDataWrapper>
        <StyledItem>
          {data?.SettlementTypeDescription} {data?.CityDescription}
        </StyledItem>
        <StyledItem>{data?.Description}</StyledItem>
        <StyledItem>{data?.Phone}</StyledItem>
      </StyledItemDataWrapper>
    </StyledItemWrapper>
  );
};

PostOfficesLTableItem.propTypes = {
  data: PropTypes.shape({
    Number: PropTypes.string.isRequired,
    SettlementTypeDescription: PropTypes.string.isRequired,
    CityDescription: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostOfficesLTableItem;
