import React from "react";
import './Table.css'
import TableHead from "../tableHead/TableHead";
import TableRow from "../tableRow/TableRow";

const Table = (props) => {
    const { headers, rows } = props;
    return(
        <table className="table table-hover">
            <TableHead data={headers}/>
            <TableRow data={rows} />
        </table>
    )
}

export default Table