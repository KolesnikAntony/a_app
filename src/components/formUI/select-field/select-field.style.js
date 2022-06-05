export const useSelectStyle = (theme, error, isEmpty) => ({
  select: {
    width: 256,
    height: 40,
    borderRadius: '8px',
    position: 'relative',
    padding: '10px 0',
    boxSizing: 'border-box',
    border: `1px solid ${error ? theme.palette.error.main : theme.palette.border.main}`,
    color: error ? theme.palette.error.main : isEmpty ? theme.palette.placeholder.main : theme.palette.primary.main,
    outline: 'none',
    '& .MuiSelect-standard': {
      display: 'flex',
      alignItems: 'center',
      height: 40,
      boxSizing: 'border-box',
      padding: '10px 16px',
      '&:focus': {
        backgroundColor: 'transparent',
      },
    },
    '&:before, &:after': {
      content: 'none',
    },
    '& .MuiSvgIcon-root': {
      marginRight: '10px',
      fill: error ? theme.palette.error.main : theme.palette.placeholder.main,
    },
    '& + .MuiFormHelperText-root': {
      marginLeft: '10px',
      fontSize: '12px',
      lineHeight: '20px',
      marginTop: '6px',
    },
    '&.Mui-focused': {
      borderColor: theme.palette.blue.main,
      color: isEmpty ? theme.palette.blue.main : null,
      '& .MuiSvgIcon-root': {
        fill: theme.palette.blue.main,
      },
    },
  },
  menu: {
    '& .MuiList-root': {
      marginTop: '8px',
      border: '1px solid rgba(0, 56, 93, 0.05)',
      boxShadow: '0px 3px 6px rgba(155, 155, 155, 0.3)',
      borderRadius: '12px',
      padding: '10px',
      bgcolor: 'white',
    },
    '& .MuiPaper-root': {
      bgcolor: 'transparent',
      boxShadow: 'none',
      border: 'none',
    },
  },
  default: {
    display: 'none',
  },
});
