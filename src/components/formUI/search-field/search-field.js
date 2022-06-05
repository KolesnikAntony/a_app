import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Box, FormControl, FormHelperText, InputBase } from '@mui/material';
import { useField } from 'formik';
import { useSearchStyle } from './search-field.style';
import PropTypes from 'prop-types';
import SearchItem from './search-item';
import SearchAdornment from './search-adornment';
import SearchOptions from './search-options';

const SearchField = ({ name, options, ...props }) => {
  const [open, setOpen] = useState(false);
  const [element, setElement] = useState(null);

  const [field, meta, helpers] = useField(name);

  const configTextField = {
    ...field,
    ...props,
  };

  const inputRef = useRef();
  const menuRef = useRef();

  const error = meta?.touched && !element && !open ? meta.error : null;

  const sx = useSearchStyle(error, open);

  const list = useMemo(
    () => options.filter((el) => el.name.toLowerCase().includes(field.value.toLowerCase())),
    [field.value, options]
  );

  useEffect(() => {
    if (element) {
      helpers.setValue(element.name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [element, open]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (element) => {
    if (element) {
      setElement(element);
    }
    handleClose();
  };

  const handleKey = (e) => {
    if (e.which === 40) {
      menuRef.current.firstChild.focus();
    }

    if (e.which === 27) {
      handleClose();
      e.target.blur();
    }
  };

  return (
    <Box sx={sx.wrapper} onClick={(e) => e.stopPropagation()}>
      <SearchAdornment error={error} open={open} />
      <FormControl variant="standard">
        <Box sx={sx.container}>
          <Choose>
            <When condition={element && !open}>
              <SearchItem element={element} handleOpen={handleOpen} />
            </When>
            <Otherwise>
              <InputBase
                inputRef={inputRef}
                onFocus={handleOpen}
                onKeyUp={handleKey}
                sx={sx.input}
                autoFocus={open}
                autoComplete="off"
                {...configTextField}
              />
            </Otherwise>
          </Choose>
        </Box>
        <If condition={error}>
          <FormHelperText sx={sx.helperText} error={true}>
            {error}
          </FormHelperText>
        </If>
      </FormControl>
      <SearchOptions
        inputRef={inputRef}
        menuRef={menuRef}
        open={open}
        list={list}
        handleClose={() => setOpen(false)}
        handleChange={handleChange}
      />
    </Box>
  );
};

SearchField.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  placeholder: PropTypes.string,
};

SearchField.defaultProps = {
  options: [],
  placeholder: 'Select a insurance',
};

export default SearchField;
