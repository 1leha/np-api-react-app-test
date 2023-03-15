import { useMediaQuery } from '@mui/material';

export const useCustomQueries = () => {
  // media queries
  const mobile = useMediaQuery('(max-width:767px)');
  const tablet = useMediaQuery('(min-width:768px)');
  const desktop = useMediaQuery('(min-width:1200px)');

  return { mobile, tablet, desktop };
};
