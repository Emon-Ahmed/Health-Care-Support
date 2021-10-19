import "./App.css";
import React from "react";
import Header from "./components/header";
import Home from "./pages/home"
import { BrowserRouter,Switch,Route } from "react-router-dom";
import About from "./pages/about";
import Footer from "./components/footer"
import NotFound from "./pages/NotFound"
import Contact from "./pages/contact"
import Appointment from "./pages/appointment"
import Profile from "./pages/profile"
import Services from "./pages/services"
import SignIn from "./pages/signin"


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/appointment">
            <Appointment></Appointment>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/profile">
            <Profile></Profile>
          </Route>
          <Route exact path="/signin">
            <SignIn></SignIn>
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
