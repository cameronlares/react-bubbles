import React from "react";
import axios from "axios";
import { axiosWithAuth } from '../components/axiosAuth';
import {useHistory} from 'react-router-dom'
import {useState} from 'react'

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const history =useHistory();
  const [credentials, setCredentials] =useState({
    username: '',
    password: ''
  })


  const handleChange = e => {
    setCredentials({
      credentials: {
        ...credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  const login = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", {
        username: 'Lambda School',
        password: 'i<3Lambd4'
      })
      .then(res => {
        console.log(res.data.payload)
        // res.data.payload ==> localStorage
        // navigate user to the "protected" route
        localStorage.setItem("token", res.data.payload);
        history.push("/bubble-page");
      })
      .catch(err => console.log(err))
    };


  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      
        <form onSubmit={login}>
         
        <input
        autoComplete="off"
        type="text"
        name="username"
        value={credentials.username}
        onChange={handleChange}
        placeholder="Lambda"
       
        />
        <input 
         autoComplete="off"
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
        placeholder="i<3Lambd4"
        />
        <button>Login</button>
        
        </form>
      </div>
  );
};

export default Login;
