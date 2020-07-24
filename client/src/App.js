import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import BubblePage from './components/BubblePage'
import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from './components/PrivateRoute'


function App() {
  return (
    <Router>
      <div className="App">
           {/* Nav */}
      <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/bubble-page">Bubble Page</Link>
     
          </li>
        </ul>
        {/* Nav */}
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
         <Switch>
        <PrivateRoute exact path="/bubble-page" component={BubblePage}></PrivateRoute>

 <Route path = '/login' component= {Login} />{" "}
           {/* history, match, location */}

           </Switch>
      </div>
    </Router>
  );
}

export default App;
