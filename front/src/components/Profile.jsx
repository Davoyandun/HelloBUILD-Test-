import React, { useState } from "react";
import Cookies from "universal-cookie";
import MenuAppBar from "./MenuAppBar";
import GithubIcon from "@material-ui/icons/GitHub";
import Button from '@mui/material/Button';
import style from "../Style/Profile.module.css";
import axios from "axios";
const baseURL = "http://localhost:3001/hb/";

export default function Profile() {
  const cookies = new Cookies();
  const [user, setUser] = useState({
    name: cookies.get("name"),
    githuRepos: cookies.get("githubRepos"),
    favoriteRepos: cookies.get("favoriteRepos"),
  });

  cookies.get("name");
  cookies.get("lastname");
  cookies.get("email");

  cookies.get("githubRepos");
  cookies.get("favoriteRepos");

 async function handlerCloseSession() {
    cookies.remove("name", { path: "/" });
    cookies.remove("lastname", { path: "/" });
    cookies.remove("email", { path: "/" });
    cookies.remove("id", { path: "/" });
    cookies.remove("githubRepos", { path: "/" });
    cookies.remove("favoriteRepos", { path: "/" });
    setUser({
      name: "",
      githuRepos: "",
      favoriteRepos: "",
    });
    await axios.put(baseURL+"logOut")

    window.location.href = "./";
  }

  return (
    <div>
      <div>
        <MenuAppBar text={"Welcome to Your Profile " + user.name}  text1='Profile' URL1 ='/profile'  text2='Favorites' URL2 ='/profile/favorites' text3='Repositories' URL3 ='/profile/repos' />
      </div>

      <div>
        <header className={style.header}>
          <div className={style.typography}>
            <h1>
              Welcome<span>to My Technical Test</span>
            </h1>
            <p>
            To start we must open GitHub, if you do not want to do it you can close session
            </p>
            <div className={style.icons}>
              <a
                href={'https://github.com/login/oauth/authorize?client_id=078f53c07581fe29c44d&redirect_uri=http://localhost:3001/hb/reposUserGitHub'}
                target="_blank"
                rel="noopener noreferrer"
                className={(style.icon, style.github)}
              >
                <GithubIcon />
              </a>  
              
                 
            </div> 
            <br/>
               {"   "}
            <Button variant="outlined" color="error" onClick={() => handlerCloseSession()}>Log Out</Button>
          </div>
        </header>
      </div>

   
    </div>
  );
}
