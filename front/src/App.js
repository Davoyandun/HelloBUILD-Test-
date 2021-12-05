import React from "react";
//componentes y modulos
import Home from "./components/Home";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Redirect} from 'react-router';
import Profile from "./components/Profile";
import Cookies from 'universal-cookie';



const cookies = new Cookies();

//
//
//
const access = cookies.get('name')

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch> 
   
         
          <Route exact path='/' render={() => !access ? <Home></Home>: <Redirect to='/profile'/>}/>
        
          <Route exact path='/profile' render={() => access ? <Profile></Profile>: <Redirect to='/'/>}/>
       
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
