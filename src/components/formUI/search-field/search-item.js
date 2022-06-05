import React from 'react';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const sx = {
  tag: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 36,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    padding: '10px 10px 10px 16px',
    backgroundColor: 'white',
    '& .MuiTypography-root': {
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      marginLeft: '10px',
    },
    '& img': {
      width: 20,
      height: 20,
    },
  },
};

const SearchItem = ({ handleOpen, element }) => {
  return (
    <Box onClick={handleOpen} sx={sx.tag}>
      <Box component="img" src={element.icon} />
      <Typography>{element.name}</Typography>
    </Box>
  );
};

SearchItem.propTypes = {
  value: PropTypes.string,
  isOpen: PropTypes.bool,
  handleOpen: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.object),
};

export default SearchItem;
