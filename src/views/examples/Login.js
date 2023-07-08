/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import dotenv from "dotenv";
import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom';
import "./Login.css"
// const navigate = useNavigate();
let value;
const Login = () => {
  const [userdetails, setuserdetails] = useState("")
  const [password, setpassword] = useState("")
  const [authenticated, setauthenticated] = useState(null);
  const history = useHistory();
  let enteringusername = (e) => {
    setuserdetails(e.target.value);
    console.log("setuserdetails", userdetails)
    
  }
  let enteringpassword = (e) => {
    setpassword(e.target.value);
    console.log("password", password)
  }

 
  const key = process.env.REACT_APP_NOT_SECRET_CODE
  console.log("ajgdjagsfkjgdjksh",key);
  let submit = () => {
    console.log("submit")
    console.log("password", password)
    console.log("userdetails", userdetails)
    // var item_value = sessionStorage.getItem("username");
    // Assign value to a key
    sessionStorage.setItem("username", userdetails);
    value = sessionStorage.getItem("username");
    console.log("item_value", value)
   
    // const dotenv = require("dotenv");
    // dotenv.config({ path: ".env" });
    let username = process.env.REACT_APP_USERNAME
    let envpassword= process.env.REACT_APP_PASSWORD
      
    console.log("environmentvalues",username,envpassword);
    // if (DataProfile != "") {
    //     seterrorProfile(false)
    // }
    if((userdetails == username)&&(password == envpassword)){
      console.log("user matches")
    
      localStorage.setItem("authenticated", true)
      const loggedInUser = localStorage.getItem("authenticated");
      // history.push('/admin');
      setauthenticated(loggedInUser);
      if (!authenticated) {
      
        return  history.push('/login');
        // <Navigate replace to="/login" />;
      } else{
        
        history.push('/admin');
        // <Navigate replace to="/admin" />
      }
    }
    else{
      window.alert("access denied")
      console.log("elseee")
    }
    // history.push('/admin/OrganizationProfile');

  }
  console.log("setuserdetailsafter", userdetails)
  return (
    <>
     <section>
        <div class="container">
        
          <div class="user signinBx">
            <div class="imgBx">
              <img src="https://t3.ftcdn.net/jpg/05/07/34/36/360_F_507343640_aFRe4OtbwHm02AvcIlhiKMcxG9F5sbrB.jpg" alt="" />
            </div>
            <div class="formBx">
              <form action="" onsubmit="return false;" id="ButtonForm">
                <h2>Sign In</h2>
                {/* <p className="text-dark"><b>dvn,,m,mn:{process.env.REACT_APP_USERNAME}</b></p> */}
                <FormGroup>
             
                  <Input
                    className="form-control-alternative"
                    onChange={enteringusername}
                    id="Username"
                    placeholder="Enter Username"
                    type="text"
                  />
                
                </FormGroup>
                <FormGroup>
             
                  <Input
                    className="form-control-alternative"
                    onChange={enteringpassword}
                    id="password"
                    placeholder="Enter password"
                    type="password"
                  />
                
                </FormGroup>
                <Button onClick={submit}>submit</Button>
                <p class="signup">
                  Don't have an account ?
                  <a href="#" onclick="toggleForm();">Sign Up.</a>
                </p>
              </form>
            </div>
          </div>
          <div class="user signupBx">
            <div class="formBx">
              <form action="" onsubmit="return false;">
                <h2>Create an account</h2>
                <input type="text" name="" placeholder="Username" />
                <input type="email" name="" placeholder="Email Address" />
                <input type="password" name="" placeholder="Create Password" />
                <input type="password" name="" placeholder="Confirm Password" />
                <input type="submit" name="" value="Sign Up" />
                <p class="signup">
                  Already have an account ?
                  <a href="#" onclick="toggleForm();">Sign in.</a>
                </p>
              </form>
            </div>
            <div class="imgBx">
              <img src="https://t4.ftcdn.net/jpg/01/18/61/71/360_F_118617140_8C6u89cvUuOXnPSm9JMqOAmvnD4dv4Vt.jpg" alt="" />
            </div>
          </div>
        </div>
      </section> 

    </>
  );
};

export default Login;
