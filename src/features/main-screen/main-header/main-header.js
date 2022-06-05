import React from 'react';
import Title from '../../../components/Title/title';
import MoreMenu from '../../../components/More/MoreMenu';
import { Box } from '@mui/material';

const sx = {
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px 24px 8px',
  },
};

const MainHeader = () => {
  return (
    <Box sx={sx.box}>
      <Title title={'Coverage'} />
      <MoreMenu />
    </Box>
  );
};

export default MainHeader;
