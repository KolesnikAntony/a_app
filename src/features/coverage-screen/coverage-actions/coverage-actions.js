import React from 'react';
import { Box, Button, Stack } from '@mui/material';
import PlusIcon from '../../../assets/images/svg/plus.svg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const sx = {
  container: {
    padding: 3,
  },
};

const CoverageActions = ({ actionName }) => {
  return (
    <Box sx={sx.container}>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="outlined" component={Link} to={'/'}>
          Cancel
        </Button>
        <Button startIcon={<PlusIcon />} variant="contained" type="submit">
          {actionName}
        </Button>
      </Stack>
    </Box>
  );
};

CoverageActions.propTypes = {
  actionName: PropTypes.string,
};

CoverageActions.defaultProps = {
  actionName: 'Add coverage',
};

export default CoverageActions;
