import React from 'react';
import { useTranslate } from '../../context/translater/translate';
import { Box } from '@mui/material';

const ErrorBackup = () => {
  const t = useTranslate();
  return <Box>{t.globalError}</Box>;
};

export default ErrorBackup;
