import React, { useContext } from "react";
import MenuAppBar from "./MenuAppBar";
import { DataContext } from "../DataContext/dataProvider";
import FavoriteCard from "./FavoriteCard";
import style from "../Style/Repos.module.css";

export default function Favorites() {
    const value = useContext(DataContext)
    const [favorite, setFavorite] = value.favorite

console.log(favorite,'component')
  return (
    <div>
      <MenuAppBar
        text={"Welcome to Your Favorite Repositories"}
        text1="Profile"
        URL1="/profile"
        text2="Favorites"
        URL2="/profile/favorites"
        text3="Repositories"
        URL3="/profile/repos"
      />
      <div className={style.main}>
        {favorite &&
          favorite?.map((el) => {
            return (
              <FavoriteCard
                id={el.id}
                name={el.name}
                language={el.language}
                visibility={el.visibility}
              />
            );
          })}
      </div>
    </div>
  );
}
