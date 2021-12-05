import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import style from "../Style/Repos.module.css";
import MenuAppBar from "./MenuAppBar";

export default function Repos() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    (async function () {
      const UserRepos = await axios
        .get("http://localhost:3001/hb/repos")
        .then((response) => {
          return response.data.data.repos;
        });

      setRepos([...UserRepos]);
    })();
  }, []);

 
  return (
    <div>
      <MenuAppBar text={"Your GitHub Repositories"} text1='Profile' URL1 ='/profile'  text2='Favorites' URL2 ='/profile/favorites' text3='Repositories' URL3 ='/profile/repos'/>
      <div className={style.main}>
        {repos &&
          repos?.map((repo) => {
            return (
              <Card
                language={repo.language}
                name={repo.name}
                url={repo.url}
                visibility={repo.visibility}
                id={repo.id}
              />
            );
          })}
      </div>
    </div>
  );
}
