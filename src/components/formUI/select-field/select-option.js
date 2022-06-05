import React from 'react';
import { Box, MenuItem, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import enter from '../../../assets/images/svg/enter.svg?url';

const useSelectOptionStyle = (theme) => ({
  option: {
    padding: '10px',
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
});

const SelectOption = ({ children, ...props }) => {
  const theme = useTheme();
  const sx = useSelectOptionStyle(theme);

  return (
    <MenuItem sx={sx.option} {...props}>
      {children}
      <Box sx={sx.enter} component="img" src={enter} alt="enter" />
    </MenuItem>
  );
};

SelectOption.propTypes = {
  children: PropTypes.node,
};

export default SelectOption;
