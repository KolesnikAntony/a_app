import React from 'react';
import { Box, Divider } from '@mui/material';
import CoverageHeader from './coverage-header/coverage-header';
import AlertCustom from '../../components/alert-custom/alert-custom';
import CoverageActions from './coverage-actions/coverage-actions';
import CoverageForm from './coverage-form/coverage-form';

const CoverageScreen = () => {
  return (
    <Box>
      <CoverageHeader />
      <AlertCustom />
      <CoverageForm />
      <Divider />
      <CoverageActions />
    </Box>
  );
};

export default CoverageScreen;
