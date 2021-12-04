import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from 'axios'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Input } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};




export default function Login() {


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  async function handlerChangeUser(e) {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  async function HandlerLogin(e) {
    e.preventDefault();
    if (user.email && user.password) {
      try {
        const session = await axios
          .post("http://localhost:3001/hb/login", user)
          .then((el) => {
            return el.data.data;
          });

        
          console.log(session)
          handleClose()
          Swal.fire({
            icon: 'success',
            title: 'sesion iniciada con exito*',
            text: 'congratulations!!',
    
          })
      } catch (err) {
        console.error(err);
      }
    } else {
      handleClose()
      Swal.fire({
        icon: 'error',
        title: 'required information *',
        text: 'Try again',

      })
    }
  }

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
        <Box sx={style}>
        <form onSubmit={(e) => HandlerLogin(e)}>
        <Typography  id="modal-modal-title" variant="h6" component="h2">
        Log in
          </Typography>
        <FormControl>
          <InputLabel>Email:</InputLabel>
          <Input
            type="email"
            value={user.email}
            name="email"
            placeholder="Correo  "
            onChange={(e) => handlerChangeUser(e)}
          />
          {!user.email ? <output>*</output> : <output>✔</output>}
          </FormControl>
          <br/>
          <FormControl>
          <InputLabel>Password:</InputLabel>
          <Input
            type="Password"
            value={user.password}
            name="password"
            placeholder="Contraseña"
            onChange={(e) => handlerChangeUser(e)}
          />
          {!user.password ? <output>*</output> : <output>✔</output>}
          <button type="submit"> LOGIN</button>
          </FormControl>
        </form>
        </Box>
        </Modal>
      </div>
    </div>
  );
}
