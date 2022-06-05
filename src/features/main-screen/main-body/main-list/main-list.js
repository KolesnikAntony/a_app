import React, { Fragment } from 'react';
import { Box, Divider } from '@mui/material';
import MainItem from './main-item';

const MainList = () => {
  const array = ['1', '2'];

  return (
    <Box>
      <For each="item" of={array}>
        <Fragment key={item}>
          <MainItem id={item} />
          <Divider />
        </Fragment>
      </For>
    </Box>
  );
};

export default MainList;
