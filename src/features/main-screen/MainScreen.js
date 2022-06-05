import React from 'react';
import { Box } from '@mui/material';
import MainHeader from './main-header/main-header';
import MainBody from './main-body/main-body';
import MainButton from './main-button/main-button';

const MainScreen = () => {
  return (
    <Box>
      <MainHeader />
      <MainBody />
      <MainButton />
    </Box>
  );
};

export default MainScreen;
