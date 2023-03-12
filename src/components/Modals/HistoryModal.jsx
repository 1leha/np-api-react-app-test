import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import Slide from '@mui/material/Slide';
import TtnList from 'components/TtnList';
import HistoryHeader from 'components/History/HistoryHeader/HistoryHeader';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClearAll = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        fullWidth
        variant="outlined"
        onClick={handleClickOpen}
        size="large"
        sx={{ height: '56px' }}
      >
        Історія ТТН
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <HistoryHeader onClose={handleClose} clearAll={handleClearAll} />
        <TtnList />
      </Dialog>
    </div>
  );
}
