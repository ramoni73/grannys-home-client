import React from "react";
import './TableHead.css'

const TableHead = (props) => {
    const { data } = props
    const columnHeaders = data.map((item) => {
        return(
            <th>{item}</th>
        )
    })
    return(
        <thead>
        <tr>
            {columnHeaders}
        </tr>
        </thead>
    )
}

export default TableHead