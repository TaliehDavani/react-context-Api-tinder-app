import React from "react";
import "./Chats.css";
import Chat from "./CHat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Parnian"
        message="hey i'm so popular!!! 😎"
        timestamp="3 days ago"
        profilePic="..."
      />
      <Chat
        name="Brad"
        message="Yo whats up!😘"
        timestamp="3 days ago"
        profilePic="..."
      />
      <Chat
        name="Ingrid"
        message=" Hey!how are you!😀"
        timestamp="40 second ago"
        profilePic="..."
      />{" "}
      <Chat
        name="James"
        message="Ola!"
        timestamp="35 second ago"
        profilePic="..."
      />{" "}
      <Chat
        name="Mrilyn"
        message="Oops there is he is ...🐕"
        timestamp="55 second ago"
        profilePic="..."
      />
    </div>
  );
}

export default Chats;
