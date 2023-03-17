import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import Slide from '@mui/material/Slide';
import TtnList from 'components/TtnList';
import HistoryHeader from 'components/History/HistoryHeader/HistoryHeader';
import { useSelector } from 'react-redux';
import { sellectIsTtnListEmpty } from 'redux/ttn/ttnSellectors';
import { Paper } from '@mui/material';
import { message } from 'utils/messages';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);
  const isTtnListEmpty = useSelector(sellectIsTtnListEmpty);

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
    <>
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

        {isTtnListEmpty ? (
          <Paper sx={{ p: 2 }}>{message.historyIsEmpty}</Paper>
        ) : (
          <TtnList onClose={handleClose} />
        )}
      </Dialog>
    </>
  );
}
