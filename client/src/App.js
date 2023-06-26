import { Route } from "react-router-dom";
import React from "react";
import LandingPage from './components/LandingPage/LandingPage';
 import Home from './components/Home/Home';
import Detail from "./components/dogDetail/dogDetail"; 
import Post from "./components/Post/Post";


function App() {
  return (
    <React.Fragment>
          <Route path ="/post" component={Post} /> 
          <Route path="/home" component={Home} /> 
          <Route path="/perro/:id" component={Detail} />  
          <Route exact path="/" component={LandingPage} />


    </React.Fragment>
);
}

export default App;
