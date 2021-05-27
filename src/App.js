import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from './components/Welcome'
import About from './components/About';
import Contact from './components/Contact';
import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/contact" component={Contact}/>
      <Route path="/about" component={About}/>
      <Route path="/" component={Welcome}/>
    </Switch>
  )
}

export default App;
