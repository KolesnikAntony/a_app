import React, { memo, useEffect, useState } from 'react';
import { APP_FORM } from '../../../constants/form-data';
import TextField from '../text-field/text-field';
import { InputAdornment } from '@mui/material';
import { useField } from 'formik';
import ReactCountryFlag from 'react-country-flag';
import parsePhoneNumber from 'libphonenumber-js';

const sx = {
  wrapper: {
    width: 18,
    height: 18,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: '50%',
    background: 'rgba(0, 56, 93, 0.1)',
  },
  input: {
    '& .MuiInputBase-input': {
      paddingLeft: '40px',
    },
    '& .MuiInputAdornment-positionStart': {
      position: 'absolute',
      left: 16,
      marginLeft: 0,
    },
  },
};

const PhoneField = () => {
  const [field] = useField(APP_FORM.FIELDS_NAME.phone);
  const [code, setCode] = useState('FR');
  const { value } = field;

  useEffect(() => {
    const phone = parsePhoneNumber(value);
    if (phone) {
      setCode(phone.country);
    }
  }, [value]);

  return (
    <TextField
      sx={sx.input}
      startAdornment={
        <InputAdornment position="start" sx={sx.wrapper}>
          <ReactCountryFlag style={{ width: 'auto', height: 18 }} countryCode={code} svg />
        </InputAdornment>
      }
      name={APP_FORM.FIELDS_NAME.phone}
      placeholder="+33 06.12.34.56.78"
    />
  );
};

export default memo(PhoneField);
