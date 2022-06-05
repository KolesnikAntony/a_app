import React from 'react';
import { Button } from '@mui/material';
import CircleItem from '../../../assets/images/svg/circles.svg';
import { Link } from 'react-router-dom';

const sx = {
  btn: {
    color: '#237DF1',
    padding: 3,
    width: '100%',
    justifyContent: 'flex-start',
    fontSize: '16px',
  },
};

const MainButton = () => {
  return (
    <Button startIcon={<CircleItem />} sx={sx.btn} component={Link} to="/create" variant="block">
      Add a coverage
    </Button>
  );
};

export default MainButton;
