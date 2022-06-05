import { InputBase, styled } from '@mui/material';
import calendarIcon from '../../../assets/images/svg/calendar.svg?url';
import calendarIconError from '../../../assets/images/svg/calendar-error.svg?url';
import calendarIconFill from '../../../assets/images/svg/calendar-fill.svg?url';

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
  '& + .MuiFormHelperText-root': {
    marginLeft: '10px',
    fontSize: '12px',
    lineHeight: '20px',
    marginTop: '6px',
  },
  '&.open .MuiInputBase-input': {
    borderColor: theme.palette.blue.main,
    '&::placeholder': {
      color: theme.palette.blue.main,
    },
  },
  '& .MuiInputBase-input': {
    borderRadius: 8,
    position: 'relative',
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.border.main}`,
    fontSize: '16px',
    lineHeight: '20px',
    width: 256,
    padding: '10px 16px',
    height: 40,
    boxSizing: 'border-box',
    caretColor: theme.palette.blue.main,
    transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
    color: theme.palette.primary.main,
    '&[type="date"]': {
      paddingLeft: '40px',
      color: 'rgba(0, 56, 93, 0.5)',
    },
    '&[type="date"]::-webkit-calendar-picker-indicator': {
      position: 'absolute',
      left: '-10px',
      top: '10px',
      opacity: 1,
      display: 'block',
      background: `url(${calendarIcon}) no-repeat`,
      width: 18,
      height: 18,
      cursor: 'pointer',
    },

    '&:focus': {
      borderColor: theme.palette.blue.main,
    },
    '&::placeholder': {
      color: 'rgba(0, 56, 93, 0.5)',
      opacity: 1,
    },
  },
  '&.fill input[type="date"]': {
    color: theme.palette.primary.main,
    '&::-webkit-calendar-picker-indicator': {
      backgroundImage: `url(${calendarIconFill})`,
    },
  },
  '&.Mui-error input': {
    borderColor: theme.palette.error.main,
    color: theme.palette.error.main,
    marginBottom: 0,
    '&::placeholder': {
      color: theme.palette.error.main,
    },
    '& .MuiInputAdornment-positionEnd': {
      fill: theme.palette.error.main,
    },
    '&[type="date"]': {
      color: theme.palette.error.main,
    },
    '&[type="date"]::-webkit-calendar-picker-indicator': {
      backgroundImage: `url(${calendarIconError})`,
    },
  },
  '& .MuiInputAdornment-positionEnd': {
    position: 'absolute',
    right: 16,
    marginLeft: 0,
  },
}));
