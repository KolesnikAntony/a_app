import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00385D',
      hover: 'rgba(0, 56, 93, 0.03)',
    },
    error: {
      main: '#FF5364',
    },
    blue: {
      main: '#237DF1',
    },
    border: {
      main: 'rgba(0, 56, 93, 0.1)',
    },
    placeholder: {
      main: 'rgba(0, 56, 93, 0.5)',
    },
  },
  typography: {
    fontFamily: ['SansPro'],
    color: '#00385D',
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#00385D',
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          background: '#fff',
          boxShadow: '0px 4px 8px rgba(155, 155, 155, 0.3)',
          borderRadius: '14px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: 'none',
        },
      },
      variants: [
        {
          props: { variant: 'block' },
          style: {
            textTransform: 'none',
            borderRadius: 0,
            '&:hover': {
              backgroundColor: 'rgba(0, 56, 93, 0.03)',
            },
            '& .MuiButton-startIcon': {
              marginRight: '16px',
              marginLeft: 0,
            },
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            textTransform: 'none',
            border: `1px solid rgba(0, 56, 93, 0.1)`,
            transition: '0.2s',
            '&:hover': {
              background: 'none',
              border: `1px solid rgba(0, 56, 93, 0.1)`,
              opacity: 0.8,
              transition: '0.2s',
            },
          },
        },
        {
          props: { variant: 'contained' },
          style: {
            textTransform: 'none',
            background: `#237DF1`,
            color: 'white',
            transition: '0.2s',
            '&:hover': {
              backgroundColor: '#237DF1',
              opacity: 0.8,
              boxShadow: 'none',
              transition: '0.2s',
            },
          },
        },
      ],
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          margin: '0 auto',
          width: 'calc(100% - 48px)',
          border: 'none',
          borderBottom: '1px solid rgba(0, 56, 93, 0.05)',
        },
      },
    },
  },
});

const AppTheme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

AppTheme.propTypes = {
  children: PropTypes.node,
};

export default AppTheme;
