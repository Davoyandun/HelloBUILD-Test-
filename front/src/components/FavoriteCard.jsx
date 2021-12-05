import React, { UseState } from "react";

import { Button } from "@mui/material";
import axios from "axios";
import s from "../Style/FavoriteCard.module.css";
const baseURL = "http://localhost:3001/hb/";

export default function FavoriteCard({ name, language, visibility, id }) {

  async function Delete(e) {
    await axios.put(baseURL + "delete", { id: id });
  }

  return (
    <div key={id} className={s.contain}>
      <h2 className={s.h2}>{name.toUpperCase()}</h2>

      <p className={s.fuerza}> Lenguaje: {language}</p>
      <p className={s.fuerza}> visibility: {visibility}</p>

      <Button type="submit" color="error" onClick={Delete}>
        {" "}
        Delete{" "}
      </Button>
    </div>
  );
}
