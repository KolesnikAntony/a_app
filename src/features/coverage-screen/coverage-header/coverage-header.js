import React from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowIcon from '../../../assets/images/svg/left-arrow.svg';
import Title from '../../../components/Title/title';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const sx = {
  header: {
    padding: 3,
    display: 'flex',
    alignItems: 'center',
  },
  btn: {
    marginRight: '12px',
    borderRadius: '6px',
  },
};

const CoverageHeader = ({ title }) => {
  return (
    <Box sx={sx.header}>
      <IconButton sx={sx.btn} component={Link} to={'/'}>
        <ArrowIcon />
      </IconButton>
      <Title title={title} />
    </Box>
  );
};

CoverageHeader.propTypes = {
  title: PropTypes.string,
};

CoverageHeader.defaultProps = {
  title: 'Add a coverage',
};

export default CoverageHeader;
