import React from "react";
import ChatForm from "../chatForm/ChatForm";
import ChatMessagesList from "../chatMessagesList/ChatMessagesList";

const ChatsPage = () => {
    return (
        <>
            <ChatMessagesList />
            <ChatForm />
        </>
    )
};

export default ChatsPage