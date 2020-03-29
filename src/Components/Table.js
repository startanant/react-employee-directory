import React, { useState } from 'react';
import employees from '../employees.json';


function Table() {

    const [ employeeList, setEmployeeList ] = useState( employees );
    const [ sort, setSort ] = useState ('asc');
    
    function sortById(sort) {
        let sortedEmployeeList;
        if(sort === 'asc') {
            sortedEmployeeList = employeeList.sort((a, b) => (a.id > b.id) ? -1 : 1);
            setSort('desc');
        } else {
            sortedEmployeeList = employeeList.sort((a, b) => (a.id > b.id) ? 1 : -1);
            setSort('asc');
        }
        setEmployeeList([...sortedEmployeeList]);
    }

    return (
        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col" onClick={function () { sortById(sort)} }>id</th>
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