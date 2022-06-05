import React from 'react';
import { useField } from 'formik';
import { FormControl, FormHelperText, InputAdornment } from '@mui/material';
import { BootstrapInput } from './text-field.style';
import ErrorIcon from '../../../assets/images/svg/error.svg';
import cn from 'classnames';

const TextFieldValidated = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

  const configTextField = {
    ...field,
    ...otherProps,
  };

  const error = meta?.touched ? meta.error : null;

  return (
    <FormControl variant="standard">
      <BootstrapInput
        className={cn({ fill: !!field.value })}
        endAdornment={
          error && (
            <InputAdornment position="end">
              <ErrorIcon />
            </InputAdornment>
          )
        }
        {...configTextField}
        error={!!error}
      />
      {error && <FormHelperText error={!!error}>{error}</FormHelperText>}
    </FormControl>
  );
};

export default TextFieldValidated;
