export const useCoverageStyle = (hold) => {
  return {
    container: {
      padding: '0 24px 24px',
    },
    row: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 1,
      '&:last-of-type': {
        marginBottom: hold ? 0 : 2,
      },
    },
    label: {
      lineHeight: '20px',
      fontSize: '16px',
      padding: '10px 0',
      display: 'flex',
      alignItems: 'center',
      fontWeight: 600,
      '& svg': {
        mr: 1,
      },
    },
    double: {
      width: 256,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    divider: {
      width: '100%',
      pt: 1,
      mb: 2,
    },
  };
};
