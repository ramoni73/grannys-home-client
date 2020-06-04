import React from "react";
import './ItemList.css'
import ItemDetails from "../itemDetails/ItemDetails";

const ItemList = (props) => {
    const {rows} = props;
    const itemDetailsRows = rows.map((item) => {
        return(
            <ItemDetails data={item} key={item.id}/>
        )
    })

    return(
        <ul className="list-group">
            {itemDetailsRows}
        </ul>
    )
}

export default ItemList