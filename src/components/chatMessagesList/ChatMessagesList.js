import React, {Component} from "react";
import "./ChatMessagesList.css"
import ChatMessage from "../chatMessage/ChatMessage";

class ChatMessagesList extends Component {
    constructor() {
        super();

        this.state={
            messages: []
        }
    }

    componentDidMount() {
        const messages = [
            {
                id: 1,
                text: "Привет!",
                from: "User 1",
                date: "04.06.2020 19:42:27"
            },
            {
                id: 2,
                text: "Как дела?",
                from: "User 2",
                date: "04.06.2020 19:42:35"
            }
        ]

        this.setState({
            messages: messages
        })
    }

    render() {
        return(
            this.state.messages.map(message => {
                return(
                    <ChatMessage
                        key={message.id}
                        text={message.text}
                        from={message.from}
                        date={message.date}
                    />
                )
            })
        )
    }
}

export default ChatMessagesList