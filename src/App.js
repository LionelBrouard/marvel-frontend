import React from "react";
import "./App.css";
import Cookies from "js-cookie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Content from "./containers/Content";
import Footer from "./components/Footer";
import Perso from "./containers/Perso";
import Comics from "./containers/Comics";
import Favoris from "./containers/Favoris";

function App() {
  return (
    <Router className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Content />
        </Route>
        <Route path="/perso">
          <Perso />
        </Route>
        <Route path="/comics">
          <Comics />
        </Route>
        <Route path="/favoris">
          <Favoris />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}
export default App;
