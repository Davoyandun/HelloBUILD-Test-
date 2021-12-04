import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Input } from "@mui/material";
const baseURL = "http://localhost:3001/hb/";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Register() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

 

  const [newUser, setnewUser] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  async function handlerChangeNewAccount(e) {
    e.preventDefault();
    setnewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  }

  async function HandlerCreateAccount(e) {
    e.preventDefault();
    if (
      newUser.name &&
      newUser.lastName &&
      newUser.email &&
      newUser.password &&
      newUser.confirmPassword
    ) {
      if (newUser.password !== newUser.confirmPassword) { 
         handleClose()
        Swal.fire({
          icon: "error",
          title: "Password Error",
          text: "Try again",
        });
      
      } else {
        const create = await axios
          .post(baseURL + "registration", newUser)
          .then((el) => {
            return el.data;
          });
          
        if (create.isDuplicate) {
          handleClose()
          Swal.fire({
            icon: "warning",
            title: "El usuario ya posee una cuenta",
            text: "Log In",
          });
        }else{
          // AQUI TODO ESTA CORRECTO



          handleClose()

        Swal.fire({
          icon: "success",
          title: "New user created",
          text: "Congratulations!!!",
          showConfirmButton: false,
          timer: 1500,
        });
        setnewUser({
          name: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        })
      }
      }
   
  } else {
      Swal.fire({
        icon: "error",
        title: "required information *",
        text: "Try again",
      });
    }

  }

  return (
    <div>
      <Button onClick={handleOpen}>Check In</Button>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form onSubmit={(e) => HandlerCreateAccount(e)}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Register your details
              </Typography>
              <FormControl>
                {" "}
                <InputLabel>Name:</InputLabel>
                <Input
                  type="text"
                  value={newUser.name}
                  name="name"
                  placeholder="Nombre"
                  onChange={(e) => handlerChangeNewAccount(e)}
                />
                {!newUser.name ? <output>*</output> : <output>✔</output>}
              </FormControl>
              <FormControl>
                {" "}
                <InputLabel>LastName:</InputLabel>
                <Input
                  type="text"
                  value={newUser.lastName}
                  name="lastName"
                  placeholder="Apellido"
                  onChange={(e) => handlerChangeNewAccount(e)}
                />
                {!newUser.lastName ? <output>*</output> : <output>✔</output>}
              </FormControl>
              <FormControl>
                {" "}
                <InputLabel>Email:</InputLabel>
                <Input
                  type="email"
                  value={newUser.email}
                  name="email"
                  placeholder="Correo  "
                  onChange={(e) => handlerChangeNewAccount(e)}
                />
                {!newUser.email ? <output>*</output> : <output>✔</output>}
              </FormControl>
              <FormControl>
                {" "}
                <InputLabel>Password:</InputLabel>
                <Input
                  type="Password"
                  value={newUser.password}
                  name="password"
                  placeholder="Contraseña"
                  onChange={(e) => handlerChangeNewAccount(e)}
                />{" "}
                {!newUser.password ? <output>*</output> : <output>✔</output>}
              </FormControl>

              <FormControl>
                {" "}
                <InputLabel>Confirm Password:</InputLabel>
                <Input
                  type="Password"
                  value={newUser.confirmPassword}
                  name="confirmPassword"
                  placeholder="Contraseña"
                  onChange={(e) => handlerChangeNewAccount(e)}
                />
                {newUser.confirmPassword !== newUser.password ? (
                  <output>❌</output>
                ) : (
                  <output>✔</output>
                )}
              </FormControl>
              <FormControl>
                <Button type="submit"> Create Account</Button>
              </FormControl>
            </form>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
