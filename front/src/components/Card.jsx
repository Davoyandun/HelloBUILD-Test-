import React, { useContext } from 'react';
import { DataContext } from "../DataContext/dataProvider";
import s from "../Style/Card.module.css";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";


export default function Card({ id, language, name, url, visibility }) {



  const value = useContext(DataContext)
  const [favorite, setFavorite] = value.favorite

  async function Favorite(e) {
    e.preventDefault()
    let repoExist = favorite.map( e => e.id).includes(id)
    if(!repoExist){


      let repoObj = {
        id,
        name,
        language,
        visibility,
    }
      setFavorite([...favorite, repoObj])

    }
    Swal.fire({
      icon: "success",
      title: name,
      text: "added to favorites!!!",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  
console.log(favorite, 'guardado')

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
