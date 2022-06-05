import React from 'react';
import { FormControl, FormHelperText, MenuItem, Select } from '@mui/material';
import { useField } from 'formik';
import { useTheme } from '@mui/styles';
import { useSelectStyle } from './select-field.style';
import SelectShortcut from './select-shortcut';

const SelectField = ({ name, children, defaultItem, ...otherProps }) => {
  const [field, meta] = useField(name);
  const theme = useTheme();

  const configTextField = {
    ...field,
    ...otherProps,
  };
  const isEmpty = !field.value;

  const error = meta?.touched ? meta.error : null;
  const sx = useSelectStyle(theme, error, isEmpty);
  return (
    <FormControl variant="standard">
      <Select
        displayEmpty
        MenuProps={{ sx: sx.menu }}
        sx={sx.select}
        variant="standard"
        error={!!error}
        {...configTextField}>
        <MenuItem value={''} sx={sx.default} autoFocus={true}>
          {defaultItem}
        </MenuItem>
        {children}
        <SelectShortcut />
      </Select>
      {error && <FormHelperText error={!!error}>{error}</FormHelperText>}
    </FormControl>
  );
};

export default SelectField;
