import React, { useCallback } from 'react';
import debounce from 'lodash.debounce';

// // Redux
import { useDispatch, useSelector } from 'react-redux';

import SearchIcon from '@mui/icons-material/Search';
//components
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from './PostOfficeFilter.styled';
import { setSearchString } from 'redux/postOffices/postOfficeSlice';
import { sellectSearchString } from 'redux/postOffices/postOfficeSellectors';
import { message } from 'utils/messages';

// icons

const PostOfficeFilter = () => {
  const dispatch = useDispatch();

  const searchString = useSelector(sellectSearchString);

  // Filter methods
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedDispatch = useCallback(
    debounce(dispatch, 50, { trailing: true }),
    []
  );
  const handleChangeFilter = e => {
    debouncedDispatch(setSearchString(e.target.value));
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={message.search}
        inputProps={{ 'aria-label': 'search' }}
        value={searchString}
        onChange={handleChangeFilter}
      />
    </Search>
  );
};

export default PostOfficeFilter;
