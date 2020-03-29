import React from 'react';
import employees from '../employees.json';

function Table() {

    const employeeList = employees;
    console.log(employeeList);

    return (
        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                </tr>
            </thead>
            <tbody>
                {employeeList.map( employee => 
                <tr>
                    <th scope="row">{employee.id}</th>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                </tr>
                )}
            </tbody>
        </table>
    );
}

export default Table;