import React from 'react';
import { Box, MenuItem, useTheme } from '@mui/material';
import enter from '../../../assets/images/svg/enter.svg?url';

const useStyle = () => {
  const theme = useTheme();
  return {
    option: {
      padding: '10px 36px 10px 10px',
      borderRadius: '10px',
      '&:hover, &:focus': {
        backgroundColor: theme.palette.primary.hover,
        '& > img': {
          display: 'block',
        },
      },
    },
    enter: {
      display: 'none',
      position: 'absolute',
      right: '10px',
    },
  };
};

const SearchOption = ({ el, children, ...props }) => {
  const sx = useStyle();

  return (
    <MenuItem sx={sx.option} tabIndex={0} {...props}>
      <Box sx={sx.enter} component="img" src={enter} alt="enter" />
      {children}
    </MenuItem>
  );
};

export default SearchOption;
