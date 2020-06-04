import React from "react";
import "./ChatMessage.css"

const ChatMessage = (props) => {
    const {text, from, date} = props

    return(
        <div className="mb-3">
            <div>
                {from} <small className="text-muted">{date}</small>
            </div>
            <div>{text}</div>
        </div>
    )
}

export default ChatMessage