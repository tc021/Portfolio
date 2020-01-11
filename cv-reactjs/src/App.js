import React from 'react';
import './App.css';
import {Switch,  Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Components/Home/home";
import Education from "./Components/Education/education";
import Experience from "./Components/Experience/experience";
import AboutMe from "./Components/About/about";

function App() {
  return (
    <Switch>
      <Route exact path="/" component = {Home} />
      <Route path ="/education" component = {Education} />
      <Route path ="/experience" component = {Experience} />
      <Route path ="/about" component = {AboutMe} />
    </Switch>
  );
}

export default App;
