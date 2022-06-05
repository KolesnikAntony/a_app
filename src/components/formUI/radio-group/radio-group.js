import React from 'react';
import { Box, FormControl, FormControlLabel, Radio, RadioGroup, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import cn from 'classnames';
import CheckedIcon from '../../../assets/images/svg/checked.svg';

const useStyle = () => {
  const theme = useTheme();
  return {
    group: {
      width: 256,
    },
    icon: {
      width: 18,
      height: 18,
      border: '1.5px solid rgba(0, 56, 93, 0.3)',
      borderRadius: '50%',
    },
    label: {
      padding: '11px 10px',
      borderRadius: '12px',
      margin: 0,
      fontSize: '16px',
      lineHeight: '20px',
      transition: '0.3s',
      color: theme.palette.primary.main,

      '& .MuiTypography-root': {
        fontWeight: 600,
      },
      '&:first-of-type': {
        marginRight: '10px',
      },
      '&.checked, &:hover': {
        backgroundColor: 'rgba(33, 150, 243, 0.05)',
      },
      '& .MuiRadio-root': {
        padding: 0,
        marginRight: '10px',
        transition: '0.3s',
      },
      '& .MuiTouchRipple-root': {
        color: theme.palette.border.main,
      },
    },
  };
};

const RadioGroupCustom = ({ name, values }) => {
  const [field] = useField(name);
  const sx = useStyle();

  return (
    <FormControl>
      <RadioGroup sx={sx.group} {...field} row>
        <For each="obj" of={values}>
          <FormControlLabel
            sx={sx.label}
            className={cn({ checked: field.value === obj.value })}
            key={obj.value}
            value={obj.value}
            control={<Radio checkedIcon={<CheckedIcon />} icon={<Box sx={sx.icon} />} size="small" />}
            label={obj.label}
          />
        </For>
      </RadioGroup>
    </FormControl>
  );
};

RadioGroupCustom.propTypes = {
  name: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })),
};

export default RadioGroupCustom;
