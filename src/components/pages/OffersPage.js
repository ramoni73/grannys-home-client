import React from "react";
import ItemList from "../itemList/ItemList";
import Row from "../row/Row";
import ItemDetails from "../itemDetails/ItemDetails";

const OffersPage = () => {
    const rows = [
        {
            id: 1,
            etc: "etc"
        },
        {
            id: 2,
            name: "this is another name",
            type: "another type of pet",
            etc: "etc.. etc... etc..."
        }
    ]
    return (
        <Row
            left={<ItemList rows={rows} />}
            right={<ItemDetails />}
        />
    )
};

export default OffersPage