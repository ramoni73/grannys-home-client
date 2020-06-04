import React from "react";
import ItemList from "../itemList/ItemList";
import Row from "../row/Row";
import ItemDetails from "../itemDetails/ItemDetails";

const OffersPage = () => {
    return (
        <Row
            left={<ItemList />}
            right={<ItemDetails />}
        />
    )
};

export default OffersPage