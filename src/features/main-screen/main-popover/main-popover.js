import React from 'react';
import { Box, Button, Divider, Popover } from '@mui/material';
import EditIcon from '../../../assets/images/svg/edit.svg';
import CopyIcon from '../../../assets/images/svg/copy.svg';
import RemoveIcon from '../../../assets/images/svg/remove.svg';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const sx = {
  box: {
    display: 'flex',
    flexDirection: 'column',
    width: 160,
  },
  btn: {
    justifyContent: 'flex-start',
    textTransform: 'none',
    padding: '11px 20px',
    borderRadius: 0,
  },
  divider: {
    width: '100%',
  },
};

const MainPopover = ({ isOpen, onClose, elementId, top, left }) => {
  const navigate = useNavigate();
  const handleNavigate = (type) => {
    return () => navigate(type, { state: elementId });
  };

  return (
    <Popover
      open={isOpen}
      onClose={onClose}
      anchorReference="anchorPosition"
      anchorPosition={{ top: top, left: left }}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}>
      <Box sx={sx.box}>
        <Button sx={sx.btn} startIcon={<EditIcon />} onClick={handleNavigate('/edit')}>
          Edit
        </Button>
        <Button sx={sx.btn} startIcon={<CopyIcon />} onClick={handleNavigate('/copy')}>
          Duplicate
        </Button>
        <Divider sx={sx.divider} />
        <Button sx={sx.btn} startIcon={<RemoveIcon />} onClick={() => console.log(elementId)}>
          Remove
        </Button>
      </Box>
    </Popover>
  );
};

MainPopover.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  elementId: PropTypes.string,
  top: PropTypes.number,
  left: PropTypes.number,
};

export default MainPopover;
