import React, { useEffect, useState } from 'react'
import { getTableData } from '../api'

function Table() {
    const [tableData, setTableData] = useState([])
    useEffect(() => {
        getTableData()
            .then(res => {
                console.log("Table data")
                console.log(res)
                setTableData(res)
            })
        return () => { }
    }, [])
    return (
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    tableData.map(elem =>
                        <tr>
                            <th scope="row">{elem.id}</th>
                            <td>{elem.name}</td>
                            <td>{elem.quantity}</td>
                            <td>{elem.price}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default Table