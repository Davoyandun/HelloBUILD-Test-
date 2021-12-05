import React from "react";
import Login from "./Login";
import Register from "./Register";
import MenuAppBar from "./MenuAppBar";

import style from "../Style/Home.module.css";

export default function Home() {
  return (
    <div className={style.container}>
      <div>
        {" "}
        <MenuAppBar text={"Welcome to GitHub/HelloBuild APP "} />
      </div>
      <div>
        {" "}
        <Login />
      </div>
      <div>
        <Register />
      </div>
    </div>
  );
}
