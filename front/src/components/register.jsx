import React from "react";
import { useState } from "react";
import Swal from 'sweetalert2'
import axios from "axios"
import { useHistory } from "react-router-dom";

export default function Register() {

  const history = useHistory()

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
        Swal.fire({
          icon: 'error',
          title: 'Different passwords',
          text: 'Try again',
    
        })
      }else{

        try {
          const create = await axios.post("http://localhost:3001/users", newUser).then((el) => { return (el.data.data) })
          if (create.length !== 0) {
              history.push('/profile')
          } 

      }
      catch (err) { console.error(err) }





        Swal.fire({
          icon: 'success',
          title: 'New user created',
          text: 'Congratulations!!!',
          showConfirmButton: false,
          timer: 1500
  
        })
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'required information *',
        text: 'Try again',

      })
    }
  }

  console.log(newUser);

  return (
    <div>
      <div>
        <form onSubmit={(e) => HandlerCreateAccount(e)}>
          <label>Name:</label>
          <input
            type="text"
            value={newUser.name}
            name="name"
            placeholder="Nombre"
            onChange={(e) => handlerChangeNewAccount(e)}
          />
          {!newUser.name ? <output>*</output> : <output>✔</output>}
          <label>LastName:</label>
          <input
            type="text"
            value={newUser.lastName}
            name="lastName"
            placeholder="Apellido"
            onChange={(e) => handlerChangeNewAccount(e)}
          />
          {!newUser.lastName ? <output>*</output> : <output>✔</output>}
          <label>Email:</label>
          <input
            type="email"
            value={newUser.email}
            name="email"
            placeholder="Correo  "
            onChange={(e) => handlerChangeNewAccount(e)}
          />
          {!newUser.email ? <output>*</output> : <output>✔</output>}
          <label>Password:</label>
          <input
            type="Password"
            value={newUser.password}
            name="password"
            placeholder="Contraseña"
            onChange={(e) => handlerChangeNewAccount(e)}
          />
          {!newUser.password ? <output>*</output> : <output>✔</output>}
          <label>Confirm Password:</label>
          <input
            type="Password"
            value={newUser.confirmPassword}
            name="confirmPassword"
            placeholder="Contraseña"
            onChange={(e) => handlerChangeNewAccount(e)}
          />
          {!newUser.confirmPassword ? <output>*</output> : <output>✔</output>}
          <button type="submit"> create an account</button>
        </form>
      </div>
    </div>
  );
}
