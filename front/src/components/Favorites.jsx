import React, { useState, useEffect } from "react";
import MenuAppBar from "./MenuAppBar";
import axios from "axios";
import FavoriteCard from "./FavoriteCard";

import style from "../Style/Repos.module.css";

export default function Favorites() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    (async function () {
      const UserRepos = await axios
        .get("http://localhost:3001/hb/favorites")
        .then((response) => {
          return response.data;
        });

      setRepos([...UserRepos]);

    })();
  }, []);


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
      {repos &&
          repos?.map((repo) => {
            return (
              <FavoriteCard
                language={repo.language}
                name={repo.name}
                visibility={repo.visibility}
                id={repo.id}
              />
            );
          })}
      </div>
    </div>
  );
}
