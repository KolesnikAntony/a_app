import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import MoreIcon from '../../assets/images/svg/more.svg';
import MoreIconBlue from '../../assets/images/svg/more-blue.svg';
import PropTypes from 'prop-types';

const sx = {
  btn: {
    padding: '5px 11px',
    borderRadius: '5px',
    transition: '0.2s',
    '&:hover': {
      background: '#FFFFFF',
      boxShadow: '0px 4px 8px rgba(155, 155, 155, 0.3)',
      transition: '0.2s',
    },
  },
};

const MoreButton = ({ onClick, id }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <IconButton
      aria-describedby={id}
      sx={sx.btn}
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
      <Choose>
        <When condition={isHover}>
          <MoreIconBlue />
        </When>
        <Otherwise>
          <MoreIcon />
        </Otherwise>
      </Choose>
    </IconButton>
  );
};

MoreButton.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.string,
};

MoreButton.defaultProps = {
  onClick: () => {},
  id: '',
};

export default MoreButton;
