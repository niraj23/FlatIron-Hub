import React, { useContext } from "react";
import axios from "axios";
import { Context } from "./AuthContext";
import { useHistory } from "react-router-dom"
import NavBar from "../Home/NavBar";
import Video from '../../videos/Video.mp4'
import Input from '@mui/material/Input';

const ariaLabel = { 'aria-label': 'description' };

const LoginScreen = () => {
  const { username, setUsername, secret, setSecret } = useContext(Context);

  const history = useHistory()

  function onSubmit(e) {
    e.preventDefault();

    if (username.length === 1 || secret.length === 1) return;

    axios
      .put(
        "https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "Private-Key": "d0296654-8da6-46a8-a2fa-8101310567a9" } }
      )
      .then(() => {
        history.push("/chats");
      });
  }

  return (
<>
<div id="login-container">
   <div id='login-page'>
      <video id="login-video" autoPlay loop muted src={Video} type='video/mp4'>
      </video>
   </div>
   <div id='nav-container'>
      <NavBar/>
   </div>
   <div id='log-container'>
      <div id='login-card'>
         <form className="auth-form" onSubmit={(e) =>
            onSubmit(e)}>
            <h2 style={{color: 'black', fontFamily: 'Trattatello, fantasy'}}>Flatiron Chat! </h2>
            <div>
               <Input inputProps={ariaLabel} style={{fontSize: 'medium'}}
               type="text"
               placeholder="Username"
               className="login-input"
               onChange={(e) => setUsername(e.target.value)}
               />
            </div>
            <div>
               <Input inputProps={ariaLabel} style={{fontSize: 'medium'}} 
               type="password"
               placeholder="secret"
               className="login-input"
               onChange={(e) => setSecret(e.target.value)}
               />
            </div>
            <button type="submit" style={{width: "40%"}} className="submit">
            Login / Sign Up
            </button>
         </form>
      </div>
   </div>
</div>
</>
  );
};

export default LoginScreen;

