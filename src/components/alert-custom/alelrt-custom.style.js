export const useAlertStyle = (theme) => ({
  alertContainer: {
    padding: '0 24px',
    marginBottom: 3,
  },
  alert: {
    padding: '10px 16px',
    alignItems: 'center',
    background: 'rgba(35, 125, 241, 0.1)',
    border: ' 1px solid rgba(0, 56, 93, 0.1)',
    boxShadow: 'none',
    borderRadius: '8px',
    '& .MuiAlert-message': {
      padding: 0,
      fontWeight: 600,
      color: theme.palette.primary.main,
    },
    '& .MuiAlert-icon': {
      padding: 0,
    },
    '& .MuiAlert-action': {
      padding: 0,
      color: theme.palette.primary.main,
    },
  },
  btn: {
    fontSize: '16px',
    height: '20px',
    width: '26px',
    padding: 0,
    fontWeight: 600,
  },
});
