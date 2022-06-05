import React, { useCallback, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import avatar from '../../../../assets/images/svg/avatar.svg?url';
import MainPopover from '../../main-popover/main-popover';
import PropTypes from 'prop-types';

const useMainItemStyle = (color) => ({
  item: {
    width: '100%',
    display: 'flex',
    padding: '20px 24px',
    cursor: 'pointer',
    transition: '0.2s',
    textAlign: 'left',
    justifyContent: 'flex-start',
  },
  img: {
    marginRight: '10px',
  },
  info: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '2px',
  },
  label: {
    marginRight: '14px',
    fontSize: '10px',
    lineHeight: '12px',
    fontWeight: 600,
    padding: '3px 6px',
    borderRadius: '6px',
    backgroundColor: color,
  },
  title: {
    fontWeight: 600,
  },
  subtitle: {
    fontSize: '14px',
    opacity: 0.75,
  },
});

const MainItem = ({ id }) => {
  const sx = useMainItemStyle('#D2FACC');

  const [position, setPosition] = useState({
    top: 0,
    left: 0,
    isOpen: false,
  });

  const handleOpen = useCallback((e) => {
    setPosition((prev) => ({ ...prev, top: e.pageY, left: e.pageX, isOpen: true }));
  }, []);

  const handleClose = () => {
    setPosition((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <>
      <Button sx={sx.item} onClick={handleOpen} variant="block">
        <Box component="img" src={avatar} alt={'Logo'} sx={sx.img} />
        <Box>
          <Box sx={sx.info}>
            <Typography sx={sx.label}>TP</Typography>
            <Typography sx={sx.title}>Assura</Typography>
          </Box>
          <Typography sx={sx.subtitle}>LAMal · Maladie · Maladie 2022</Typography>
        </Box>
      </Button>
      <MainPopover elementId={id} {...position} onClose={handleClose} />
    </>
  );
};

MainItem.propTypes = {
  id: PropTypes.string,
};

export default MainItem;
