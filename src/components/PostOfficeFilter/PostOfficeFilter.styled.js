import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

export const Search = styled('div')(({ theme }) => ({
  border: 'solid 1px',
  borderColor: theme.palette.grey[400],

  padding: theme.spacing(1, 0),

  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    borderColor: theme.palette.grey[900],
  },
  marginLeft: 0,
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  top: 0,
  pointerEvents: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));
