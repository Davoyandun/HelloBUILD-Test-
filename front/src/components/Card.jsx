import React from 'react';

import s from "../Style/Card.module.css";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import axios from 'axios';
const baseURL = 'http://localhost:3001/hb/'


export default function Card({ id, language, name, url, visibility }) {




  async function Favorite(e) {
    e.preventDefault()
      let repoObj = {
        id,
        name,
        language,
        visibility,
    }
   await axios.post(baseURL+"favorites", repoObj)

    return Swal.fire({
      icon: "success",
      title: name,
      text: "added to favorites!!!",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  


  return (
    <div key={id } className={s.contain}>
      <h2 className={s.h2}>{name.toUpperCase()}</h2>
      <a href={url} target="_blank"  rel="noreferrer">
        Go to Repository
      </a>
      <p className={s.fuerza}> Lenguaje: {language}</p>
      <p className={s.fuerza}> visibility: {visibility}</p>
    
      <Button  color="success" onClick={Favorite}> Add Favorite</Button>
    
    </div>
  );
}
