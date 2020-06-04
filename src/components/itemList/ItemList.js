import React from "react";
import './ItemList.css'

const ItemList = (props) => {
    const {rows} = props;
    const itemDetailsRows = rows.map((item) => {
        return(
            <li className="list-group-item" key={item.id}>{item.etc}</li>
        )
    })

    return(
        <ul className="list-group">
            {itemDetailsRows}
        </ul>
    )
}

export default ItemList