import React, { useContext } from "react";
import { Button } from "@mui/material";

import s from '../Style/FavoriteCard.module.css'

export default function FavoriteCard({ name, language, visibility, id }) {


  function Delete(e) {
    e.preventDefault();


  }

  return (
    <div key={id} className={s.contain}>
      <h2 className={s.h2}>{name.toUpperCase()}</h2>

      <p className={s.fuerza}> Lenguaje: {language}</p>
      <p className={s.fuerza}> visibility: {visibility}</p>

      <Button
      
        color="error"
        onClick={Delete}
      >
        {" "}
        Delete{" "}
      </Button>
    </div>
  );
}
