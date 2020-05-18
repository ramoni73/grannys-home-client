import React from "react";
import './CardList.css'
import Card from "../card/Card";

const CardList = (props) => {
    const { data } = props;
    const cards = data.map(item => {
        return(
            <Card
                header={item.header}
                title={item.title}
                text={item.text}
            />
        )
    })
    return(
        <div className="row">
            {cards}
        </div>
    )
}

export default CardList