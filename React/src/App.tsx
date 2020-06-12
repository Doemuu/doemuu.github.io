import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/home/home";
import Cousin from "./pages/cousins/cousin";

function App() {
  return (
      <Switch>
          <Route path="/" exact>
              <Home/>
          </Route>
          <Route path="/cousin" component={Cousin}/>
      </Switch>
  );
}

export default App;
