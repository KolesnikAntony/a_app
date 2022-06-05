import { styled } from '@mui/material';

export const MenuContainer = styled('div')(({ theme }) => {
  return {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 50,
    zIndex: 1,
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '12px',
    border: `1px solid ${theme.palette.border.main}`,
    boxShadow: '0px 3px 6px rgba(155, 155, 155, 0.3)',
  };
});
