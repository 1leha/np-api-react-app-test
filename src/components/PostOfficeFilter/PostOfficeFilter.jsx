import React from 'react';

// // Redux
import { useDispatch, useSelector } from 'react-redux';

import SearchIcon from '@mui/icons-material/Search';

// icons

//components
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from './PostOfficeFilter.styled';

const PostOfficeFilter = () => {
  // const dispatch = useDispatch();

  // const filter = useSelector(sellectTtnFilter);

  // Filter methods
  // const handleChangeFilter = e => {
  //   if (e.target.value.length > 14 || Number.isNaN(+e.target.value)) {
  //     return;
  //   }
  //   dispatch(inputFilterTtn(e.target.value));
  // };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        // value={filter}
        // onChange={handleChangeFilter}
      />
    </Search>
  );
};

export default PostOfficeFilter;
