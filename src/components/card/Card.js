import React from "react";
import './Card.css'

const Card = (props) => {
    const { header,title, text } = props

    return(
        <div className="card text-white bg-dark m-3">
            <div className="card-header">{header}</div>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{text}</p>
                <button type="button" className="btn btn-primary">Edit</button>
            </div>
        </div>
    )
}

export default Card