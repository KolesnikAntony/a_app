import React from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';
import TabIcon from '../../../assets/images/svg/tab.svg';
import ArrowTopIcon from '../../../assets/images/svg/arrow_up.svg';
import ArrowBottomIcon from '../../../assets/images/svg/arrow_down.svg';

const sx = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  or: {
    margin: '0 8px',
  },
  leftMargin: {
    marginLeft: '8px',
  },
  divider: {
    width: '100%',
  },
};

const SelectShortcut = () => {
  return (
    <>
      <Divider sx={sx.divider} />
      <Box sx={sx.container}>
        <TabIcon />
        <Typography sx={sx.or}>or</Typography>
        <Stack direction="row" spacing={1}>
          <ArrowTopIcon />
          <ArrowBottomIcon />
        </Stack>
        <Typography sx={sx.leftMargin}>navigate.</Typography>
      </Box>
    </>
  );
};

export default SelectShortcut;
