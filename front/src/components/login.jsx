import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from 'axios'





export default function Login() {
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
        const log = await axios
          .post("http://localhost:3001/users", user)
          .then((el) => {
            return el.data.data;
          });
      } catch (err) {
        console.error(err);
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'required information *',
        text: 'Try again',

      })
    }
  }

  return (
    <div>
      <div>
        <form onSubmit={(e) => HandlerLogin(e)}>
          <label>Email:</label>
          <input
            type="email"
            value={newUser.email}
            name="email"
            placeholder="Correo  "
            onChange={(e) => handlerChangeUser(e)}
          />
          {!newUser.email ? <output>*</output> : <output>✔</output>}
          <label>Password:</label>
          <input
            type="Password"
            value={newUser.password}
            name="password"
            placeholder="Contraseña"
            onChange={(e) => handlerChangeUser(e)}
          />
          {!newUser.password ? <output>*</output> : <output>✔</output>}

          <button type="submit"> LOGIN</button>
        </form>
      </div>
    </div>
  );
}
