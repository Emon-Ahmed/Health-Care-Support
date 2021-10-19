import "./App.css";
import React from "react";
import Header from "./components/header";
import Home from "./pages/home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/about";
import Footer from "./components/footer";
import NotFound from "./pages/NotFound";
import Contact from "./pages/contact";
import Appointment from "./pages/appointment";
import Services from "./pages/services";
import Register from "./pages/register";
import Login from "./pages/login";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Profile from "./pages/profile";

export default function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute exact path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <PrivateRoute exact path="/profile">
              <Profile></Profile>
            </PrivateRoute>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
