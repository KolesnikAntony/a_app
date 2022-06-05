import { useTheme } from '@mui/material';

const getSearchStyle = (theme, error, open) => ({
  wrapper: {
    position: 'relative',
  },
  container: {
    position: 'relative',
    overflow: 'hidden',
    width: 256,
    height: 40,
    padding: '10px 16px',
    borderRadius: '8px',
    backgroundColor: 'transparent',
    border: '1px solid',
    borderColor: open ? theme.palette.blue.main : error ? theme.palette.error.main : theme.palette.border.main,
    boxSizing: 'border-box',
    transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
  },
  input: {
    width: '100%',
    height: '100%',
    padding: '0 20px 0 0',
    lineHeight: '20px',
    caretColor: theme.palette.blue.main,
    '& .MuiInputBase-input::placeholder': {
      color: open ? theme.palette.blue.main : error ? theme.palette.error.main : 'rgba(0, 56, 93, 0.5)',
      opacity: 1,
    },
  },
  helperText: {
    marginLeft: '10px',
    fontSize: '12px',
    lineHeight: '20px',
    marginTop: '6px',
  },
});

export const useSearchStyle = (error, open) => {
  const theme = useTheme();
  return getSearchStyle(theme, error, open);
};
