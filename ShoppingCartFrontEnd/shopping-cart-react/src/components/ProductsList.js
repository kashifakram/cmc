import React from 'react'

export default function ProductsList() {
  return (
    <div>
    <div className="container mt-5">
        <table className="table">
            <thead>
                <th>
                    <td>
                        Product Name
                    </td>
                    <td>
                        Product Price
                    </td>
                    <td>
                        Product Desc
                    </td>
                    <td>
                        Product Name
                    </td>
                    <td>
                        Product Currency
                    </td>
                    <td>
                        Product Name
                    </td>
                    <td>
                        <button type="button" className="btn btn-primary">Primary</button>
                    </td>
                </th>
            </thead>
            <tbody>
                <tr>
                    <td>
                        Name <br />
                        Address <br />
                        OnGoing <br />
                    </td>
                    <td>
                        <a href="#">Edit</a> &nbsp;| &nbsp;
                        <a href="#">Delete</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
  )
}
