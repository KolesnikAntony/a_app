import React from 'react';
import { Button } from '@mui/material';
import IconBtn from '../../assets/images/svg/arrow_in_circle_down.svg';
import PropTypes from 'prop-types';

const useStyle = (open) => ({
  btn: {
    textTransform: 'none',
    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: 600,
    marginLeft: '-9px',
    background: 'none',
    '& .MuiButton-startIcon': {
      transition: '0.2s',
      transform: open ? 'rotate(180deg)' : 'rotate(0)',
    },
  },
});

const ShowMoreBtn = ({ open, onClick }) => {
  const sx = useStyle(open);
  return (
    <Button sx={sx.btn} variant="text" startIcon={<IconBtn />} onClick={onClick}>
      Show more options
    </Button>
  );
};

ShowMoreBtn.propTypes = {
  open: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ShowMoreBtn;
