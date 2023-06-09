import React from 'react';
import { StyledContainer } from './Container.styled';
import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

Container.propTypes = { children: PropTypes.any.isRequired };

export default Container;
