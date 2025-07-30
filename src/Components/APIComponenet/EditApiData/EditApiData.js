import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

 function EditApiData({isOpenEditing,setOpenEditing}) {
  const [open, setOpen] = React.useState(isOpenEditing);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const navigate = useNavigate();


  const handleClose = () => {
   setOpenEditing(prev => !prev);
   navigate('/ekart')
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={isOpenEditing}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <div style={{display: "flex",flexDirection:"column",height: "200px",justifyContent: "space-between",margin: "40px"}}>
        <TextField id="outlined-basic" className="passwordBox"   style={{height: "40px",width: "300px",marginBottom: "40px"}} label="Password"  name="Email"  variant="outlined" />
        <TextField id="outlined-basic" className="userNameBox" style={{height: "40px",width: "300px",marginBottom: "40px"}} label="UserName"  name="Password"  variant="outlined" />
        <Button variant="contained" onClick={handleClose}>Submit</Button>
</div>
      </Dialog>
    </React.Fragment>
  );
}


export default EditApiData;