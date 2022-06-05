import React from 'react';
import { Box, Skeleton } from '@mui/material';

const sx = {
  container: {
    padding: '0 24px 24px',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 1,
    '&:last-of-type': {
      marginBottom: 2,
    },
  },
  large: {
    background: ' rgba(0, 56, 93, 0.03)',
    borderRadius: '12px',
    width: 256,
    height: '40px',
    transform: 'none',
  },
  small: (width = 70) => ({
    background: ' rgba(0, 56, 93, 0.03)',
    borderRadius: '12px',
    width: width,
    height: '20px',
    transform: 'none',
  }),
};

const items = [74, 77, 94, 116, 126, 127, 118];

const CoveragePreloader = () => {
  return (
    <Box sx={sx.container}>
      <For each="item" of={items}>
        <Box key={item} sx={sx.row}>
          <Skeleton sx={sx.small(item)} />
          <Skeleton sx={sx.large} />
        </Box>
      </For>
      <Skeleton sx={sx.small(145)} />
    </Box>
  );
};

export default CoveragePreloader;
