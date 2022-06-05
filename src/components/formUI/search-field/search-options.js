import React from 'react';
import { Box, ClickAwayListener, Grow, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { MenuContainer } from '../custom-menu/menu-container';
import SearchOption from './search-option';
import SelectShortcut from '../select-field/select-shortcut';

const sx = {
  text: {
    ml: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  empty: {
    padding: '10px',
  },
};

const SearchOptions = ({ open, handleClose, handleChange, list, inputRef, menuRef }) => {
  const handleClick = (element) => {
    return () => handleChange(element);
  };

  const fun = (e) => {
    e.preventDefault();
    if (e.which === 38) {
      if (e.target.previousSibling) {
        e.target.previousSibling.focus();
      } else {
        inputRef.current.focus();
      }
    }

    if (e.which === 40) {
      if (e.target.nextSibling) {
        e.target.nextSibling.focus();
      } else {
        handleClose();
      }
    }

    if (e.which === 27) {
      handleClose();
    }
  };
  return (
    <>
      <ClickAwayListener onClickAway={handleClose}>
        <Grow in={open}>
          <MenuContainer ref={menuRef}>
            <For each="el" index="idx" of={list}>
              <SearchOption key={el.id} onKeyUp={fun} onClick={handleClick(el)}>
                <Box component="img" src={el.icon} />
                <Typography sx={sx.text}>{el.name} fafadfadfaf</Typography>
              </SearchOption>
            </For>
            <Choose>
              <When condition={!list.length}>
                <Typography sx={sx.empty}>List is empty</Typography>
              </When>
              <Otherwise>
                <SelectShortcut />
              </Otherwise>
            </Choose>
          </MenuContainer>
        </Grow>
      </ClickAwayListener>
    </>
  );
};

SearchOptions.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  handleChange: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.object),
};

export default SearchOptions;
