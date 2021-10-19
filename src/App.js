import "./App.css";
import React from "react";
import Header from "./components/header";
import Home from "./pages/home"
import { BrowserRouter,Switch,Route } from "react-router-dom";
import About from "./pages/about";
import Footer from "./components/footer"
import NotFound from "./pages/NotFound"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}
