import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Website Module/Home";
import Service from "./Website Module/Service";
import Contact from "./Website Module/Contact";
import About from "./Website Module/About";
import Navbar from "./Website Module/Navbar";
import Footer from "./Website Module/Footer";
import EditCompany from "./component/EditCompany";
import CompanyForm from "./component/CompanyForm";
import CompanyList from "./component/CompanyList";

import { BrowserRouter, Switch, Route } from "react-router-dom";
const App=() =>{
  return (
    <>
      <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/servicee" component={Service} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/about" component={About} />
      <Route exact path="/add" component={CompanyForm} />
      <Route exact path="/edit/:id" component={EditCompany} />
      <Route exact path="/list" component={CompanyList} />
    </Switch>

    <Footer />
    </BrowserRouter>
    </>
  );
};
export default App;

