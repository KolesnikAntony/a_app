import React from 'react';
import { Box, Typography } from '@mui/material';
import { APP_FORM } from '../../../../constants/form-data';
import TextField from '../../../../components/formUI/text-field/text-field';
import { useCoverageStyle } from '../coverage-form.style';
import LineIcon from '../../../../assets/images/svg/name.svg';

const CoverageHold = () => {
  const sx = useCoverageStyle(true);
  return (
    <>
      <Box sx={sx.row}>
        <Typography sx={sx.label}>
          <LineIcon />
          Description
        </Typography>
        <TextField name={APP_FORM.FIELDS_NAME.description} placeholder="Description" />
      </Box>
    </>
  );
};

export default CoverageHold;
