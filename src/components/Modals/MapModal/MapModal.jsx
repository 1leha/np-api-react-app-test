import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import Slide from '@mui/material/Slide';
import { useSelector } from 'react-redux';
import { sellectIsTtnListEmpty } from 'redux/ttn/ttnSellectors';
import {
  AppBar,
  IconButton,
  // Paper,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { forwardRef, useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import PostOfficeDetales from 'components/PostOfficeDetales';
import { useCustomQueries } from 'hooks';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MapModal({ postId, setActualPostId }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (postId) {
      setOpen(true);
    }
  }, [postId]);

  // media queries
  const { mobile, tablet, desktop } = useCustomQueries();

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
    setActualPostId(null);
  };

  // postId && setOpen(true);

  return (
    <>
      {/* <Button
        fullWidth
        variant="outlined"
        onClick={handleClickOpen}
        size="large"
        sx={{ height: '56px' }}
      >
        Історія ТТН
      </Button> */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          component="div"
          sx={{
            position: 'relative',
          }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>

            {/*  Header */}
            <Typography
              sx={{ ml: mobile && 2, flex: 1 }}
              variant="h6"
              component="div"
            >
              Відділеня №{postId}
            </Typography>
          </Toolbar>
        </AppBar>
        <PostOfficeDetales />
      </Dialog>
    </>
  );
}
