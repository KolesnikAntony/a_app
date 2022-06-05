import React from 'react';
import Icon from '../../assets/images/svg/title.svg';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const sx = {
  box: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
    marginLeft: 2,
  },
};

const Title = ({ title }) => {
  return (
    <Box sx={sx.box}>
      <Icon />
      <Typography sx={sx.title}>{title}</Typography>
    </Box>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
