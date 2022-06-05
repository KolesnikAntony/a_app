import React from 'react';
import SearchIconFocus from '../../../assets/images/svg/search-blue.svg';
import SearchIconError from '../../../assets/images/svg/search-red.svg';
import SearchIcon from '../../../assets/images/svg/search.svg';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

const sx = {
  icon: {
    position: 'absolute',
    right: 16,
    top: 11,
    bottom: 11,
  },
};

const SearchAdornment = ({ error, open }) => {
  return (
    <Box sx={sx.icon}>
      <Choose>
        <When condition={open}>
          <SearchIconFocus />
        </When>
        <When condition={error}>
          <SearchIconError />
        </When>
        <Otherwise>
          <SearchIcon />
        </Otherwise>
      </Choose>
    </Box>
  );
};

SearchAdornment.propTypes = {
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  open: PropTypes.bool,
};

export default SearchAdornment;
