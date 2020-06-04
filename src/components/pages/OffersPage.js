import React from "react";
import ItemList from "../itemList/ItemList";

const OffersPage = () => {
    const rows = [
        {
            id: 1,
            name: "this is name",
            type: "it is a type of pet",
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
        <>
            <ItemList />
        </>
    )
};

export default OffersPage