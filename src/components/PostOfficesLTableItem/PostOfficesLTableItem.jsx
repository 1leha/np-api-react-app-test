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
      <StyledPostNumber>{data.number}</StyledPostNumber>
      <StyledItemDataWrapper>
        <StyledItem>{data.name}</StyledItem>
        <StyledItem>{data.adress}</StyledItem>
        <StyledItem>{data.cargo}</StyledItem>
      </StyledItemDataWrapper>
    </StyledItemWrapper>
  );
};

PostOfficesLTableItem.propTypes = {
  data: PropTypes.shape({
    number: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    adress: PropTypes.string.isRequired,
    cargo: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostOfficesLTableItem;
