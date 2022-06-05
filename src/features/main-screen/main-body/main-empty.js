import React from 'react';
import { Typography } from '@mui/material';

const sx = {
  text: {
    padding: 3,
  },
};

const MainEmpty = () => {
  return <Typography sx={sx.text}>This patient seems to not have any registered insurance coverage.</Typography>;
};

export default MainEmpty;
