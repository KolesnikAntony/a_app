import React from 'react';
import { Box } from '@mui/material';
import MainScreen from './features/main-screen/MainScreen';
import { Route, Routes } from 'react-router-dom';
import CoverageContainer from './features/coverage-screen/coverage-containers/coverage-container';
import CreateContainer from './features/coverage-screen/coverage-containers/create-container';

const useAppStyle = () => ({
  app: {
    width: 447,
    background: '#FFFFFF',
    boxShadow: '0px 4px 8px rgba(155, 155, 155, 0.15)',
    borderRadius: '14px',
    overflow: 'hidden',
  },
});

const App = () => {
  const sx = useAppStyle();
  return (
    <Box sx={sx.app}>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/create" element={<CreateContainer />} />
        <Route path="/edit" element={<CoverageContainer />} />
        <Route path="/copy" element={<CoverageContainer />} />
      </Routes>
    </Box>
  );
};
export default React.memo(App);
