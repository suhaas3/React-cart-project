import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Login from '../Login/Login';

export default function LoginPopup({isLogin,setLogin}) {
  const [open, setOpen] = React.useState(isLogin);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={isLogin}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <Login isLogin={isLogin} setLogin={setLogin}/>
      </Dialog>
    </React.Fragment>
  );
}
