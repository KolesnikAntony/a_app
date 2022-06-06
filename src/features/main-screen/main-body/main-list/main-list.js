import React, { Fragment } from 'react';
import { Box, Divider } from '@mui/material';
import MainItem from './main-item';
import { useSelector } from 'react-redux';

const MainList = () => {
  const { coverage } = useSelector((state) => state.general);
  return (
    <Box>
      <For each="item" of={coverage}>
        <Fragment key={item.id}>
          <MainItem {...item} />
          <Divider />
        </Fragment>
      </For>
    </Box>
  );
};

export default MainList;
