import React from 'react';
import { Alert, Box, Button } from '@mui/material';
import ScanIcon from '../../assets/images/svg/card_scan.svg';
import { useTheme } from '@mui/styles';
import { useAlertStyle } from './alelrt-custom.style';

const AlertCustom = () => {
  const theme = useTheme();
  const sx = useAlertStyle(theme);
  return (
    <Box sx={sx.alertContainer}>
      <Alert sx={sx.alert} icon={<ScanIcon />} action={<Button sx={sx.btn}>SKAN</Button>}>
        Scan the insurance card to fill the datas
      </Alert>
    </Box>
  );
};

export default AlertCustom;
