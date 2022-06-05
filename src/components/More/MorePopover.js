import React from 'react';
import { Box, Button, Popover } from '@mui/material';
import PlusIcon from '../../assets/images/svg/maximize.svg';
import CorrectIcon from '../../assets/images/svg/correct.svg';
import ArchiveIcon from '../../assets/images/svg/archive_lineal.svg';
import { Link } from 'react-router-dom';

const sx = {
  box: {
    display: 'flex',
    flexDirection: 'column',
    padding: '9px 0',
  },
  btn: {
    justifyContent: 'flex-start',
    textTransform: 'none',
    padding: '11px 20px',
    borderRadius: 0,
  },
};

const MorePopover = ({ id, isOpen, anchor, onClose }) => {
  return (
    <Popover
      id={id}
      open={isOpen}
      anchorEl={anchor}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}>
      <Box sx={sx.box}>
        <Button sx={sx.btn} startIcon={<PlusIcon />} component={Link} to="/create">
          Add a coverage
        </Button>
        <Button sx={sx.btn} startIcon={<CorrectIcon />}>
          Covercheck
        </Button>
        <Button sx={sx.btn} startIcon={<ArchiveIcon />}>
          Display archived insurances
        </Button>
      </Box>
    </Popover>
  );
};

export default MorePopover;
