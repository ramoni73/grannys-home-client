import React from "react";
import Table from "../table/Table";

const OffersPage = () => {
    const headers = ['id', 'name', 'Еще что-то', 'и т.п.']
    const rows = [
        {
            id: 1,
            name: "this is name",
            something: "something",
            etc: "etc"
        },
        {
            id: 2,
            name: "this is another name",
            something: "another something",
            etc: "etc.. etc... etc..."
        }
    ]
    return (
        <>
            <Table
                headers={headers}
                rows={rows}
            />
        </>
    )
};

export default OffersPage