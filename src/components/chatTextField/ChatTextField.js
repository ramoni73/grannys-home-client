import React from "react";
import './ChatTextField.css'

const ChatTextField = (props) => {
    const {name, value, onChange} = props

    return(
        <div className="form-group">
            <textarea className="form-control" id="textarea" rows="3"
                      name={name}
                      value={value}
                      onChange={onChange}
            />
        </div>
    )
}

export default ChatTextField