import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { makeRandomMessage, randomNameGenerator } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState("");
  useEffect(() => {
    // API Call
    const itr = setInterval(() => {
      dispatch(
        addMessage({
          name: randomNameGenerator(),
          message: makeRandomMessage(20),
        })
      );
    }, 2000);

    return () => {
      clearInterval(itr);
    };
  }, []);
  return (
    <div>
      <div className="ml-2 p-2 w-full h-[600px] border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((chat, index) => {
          return (
            <ChatMessage key={index} name={chat.name} message={chat.message} />
          );
        })}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(liveMessage);
          dispatch(
            addMessage({
              name: "Rahul Rautwar",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-72"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-700">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
