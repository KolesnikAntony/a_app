import React from 'react';
import MoreButton from './MoreButton';
import MorePopover from './MorePopover';

const MoreMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'more-popover' : undefined;

  return (
    <>
      <MoreButton id={id} onClick={handleClick} />
      <MorePopover id={id} anchor={anchorEl} isOpen={open} onClose={handleClose} />
    </>
  );
};

export default MoreMenu;
