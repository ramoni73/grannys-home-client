import React from "react";
import './TableRow.css'

const TableRow = (props) => {
    const { data } = props
    const tableRows = data.map(item => {
        return(
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.something}</td>
                <td>{item.etc}</td>
            </tr>
        )
    })
    return(
        <tbody>
        {tableRows}
        </tbody>
    )
}

export default TableRow