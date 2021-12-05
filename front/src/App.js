import React from "react";
//componentes y modulos
import Home from "./components/Home";
import Profile from "./components/Profile";

import Repos from "./components/Repos";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
import { DataProvider } from "./DataContext/dataProvider";

import Cookies from "universal-cookie";
import Favorites from "./components/Favorites";

const cookies = new Cookies();

//
//
//
const access = cookies.get("name");

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <DataProvider>
          <Switch>
            <Route
              exact
              path="/"
              render={() =>
                !access ? <Home></Home> : <Redirect to="/profile" />
              }
            />
            <Route
              exact
              path="/profile"
              render={() =>
                access ? <Profile></Profile> : <Redirect to="/" />
              }
            />
            <Route
              exact
              path="/profile/repos"
              render={() => (access ? <Repos></Repos> : <Redirect to="/" />)}
            />
             <Route
              exact
              path="/profile/favorites"
              render={() => (access ? <Favorites></Favorites> : <Redirect to="/" />)}
            />
          </Switch>
        </DataProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
