import React, { useState, useEffect, useContext } from "react";
import { Context } from "./AuthContext";
import { ChatEngine, MessageFormSocial } from 'react-chat-engine'
import { useHistory } from "react-router-dom"

const Chats = () => {
  const { username, secret } = useContext(Context);
  const [chat, setChat] = useState(false);
  const history = useHistory();
  

  useEffect(() => {
    if (typeof document !== undefined) {
      setChat(true);
    }
  }, []);

  useEffect(() => {
    if (username === "" || secret === "") {
      history.push("/login");
    }
  }, [username, secret, history]);

  if (!chat) return <div />;

  async function handleLogout() {
    localStorage.removeItem('username')
    history.push('/login')
  }

  return (
    <div className='chats-page'>
      <div className='nav-bar'>
        <div onClick={handleLogout} className='logout-tab'>
          Logout
        </div>
      </div>
        <ChatEngine
          height="calc(100vh - 50px)"
          projectID="9815f58e-8c40-4d7e-84f7-351ac5dca83a"
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial />}
          onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
      </div>
  );
}

export default Chats;