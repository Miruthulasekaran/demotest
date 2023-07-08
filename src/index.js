
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "views/examples/Login";
import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
import 'bootstrap/dist/js/bootstrap.js';
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import { HashRouter } from 'react-router-dom';
import { render } from "react-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
const loggedInUser = localStorage.getItem("authenticated");
   console.log("loggedInUser",loggedInUser)
root.render(
  
  <HashRouter>
  {/* <BrowserRouter> */}
    <Switch>
    
if(loggedInUser = "true"):
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />:<Login/>
      {/* <Redirect from="/" to="/admin/index" /> */}
    </Switch>
  {/* </BrowserRouter> */}
  </HashRouter>
);
