import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";

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

  function handlerCloseSession() {
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
 
    window.location.href = "./";
  }
  console.log(user);
  return (
    <div>
      <button onClick={() => handlerCloseSession()}>Log Out</button>
    </div>
  );
}
