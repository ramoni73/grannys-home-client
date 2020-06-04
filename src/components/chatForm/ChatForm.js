import React, {Component} from "react";
import "./ChatForm.css"
import ChatTextField from "../chatTextField/ChatTextField";

class ChatForm extends Component {
    constructor() {
        super();

        this.state={
            message: ""
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const newMessage = {
            message: this.state.message
        };

        console.log(newMessage)

        this.setState({
            message: ""
        })
    }

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <ChatTextField
                    name={'message'}
                    value={this.state.message}
                    onChange={this.onChange}
                />

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default ChatForm