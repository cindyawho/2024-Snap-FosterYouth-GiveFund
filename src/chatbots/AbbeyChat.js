import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import defaultProfileImage from "../../assets/snapchat/abbeyBitmoji.png";

//Temporary Solution to avoid warning on user screen
const error = console.error; 
console.error = (...args) => { 
  if (/defaultProps/.test(args[0])) return; error(...args); 
};

const CHATBOT_USER_OBJ = {
  _id: 9,
  name: "Abigail Wynkoop",
  avatar: defaultProfileImage,
};

export default function AbbeyChat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "It's giving",
        createdAt: new Date(),
        user: CHATBOT_USER_OBJ,
      },
    ]);
  }, []);

  const addNewMessage = (newMessages) => {
    setMessages((previousMessages) => {
      return GiftedChat.append(previousMessages, newMessages);
    });
  };

  const addBotMessage = (text) => {
    addNewMessage([
      {
        _id: Math.round(Math.random() * 1000000),
        text: text,
        createdAt: new Date(),
        user: CHATBOT_USER_OBJ,
      },
    ]);
  };

  const respondToUser = (userMessages) => {
    addBotMessage("It's giving Give Fund!");
  };

  const onSend = useCallback((messages = []) => {
    addNewMessage(messages);
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => {
        onSend(messages);
        setTimeout(() => respondToUser(messages), 1000);
      }}
      user={{
        _id: 1,
        name: "Alexis",
      }}
      renderUsernameOnMessage={true}
    />
  );
}
