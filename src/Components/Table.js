import React, { useState, useEffect } from 'react';
import employees from '../employees.json';


function Table() {

    const [ employeeList, setEmployeeList ] = useState( [] );
    const [ sort, setSort ] = useState( 'asc' );
    const [ myFilter, setFilter] = useState( '' );

    useEffect(
        function() {
            console.log(`[useEffect] was run for filter(${myFilter})`);
            loadEmployees( myFilter );
        }, [myFilter]
    );

    function loadEmployees( filter ) {
        let filteredEmployeeList;
        if (filter === '') {
            filteredEmployeeList = employees;
        } else {
            filteredEmployeeList = employees.filter( employee =>  employee.name.toLowerCase().startsWith(filter) );
        }
        console.log(filteredEmployeeList);
        setEmployeeList([...filteredEmployeeList]);
    }
    
    function sortById( sort ) {
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

    // function filter(value) {
    //     //alert(value);
    //     let filteredEmployeeList = employeeList.filter(employee => { let emp_name = employee.name.toLowerCase(); console.log(emp_name); return emp_name.startsWith(value) });
    //     console.log(filteredEmployeeList);
    //     setEmployeeList([...filteredEmployeeList]);
    // }

    function handleInputChange(event) {
        //alert(event.target.value);
        const value = event.target.value.toLowerCase();
        //filter(value);
        setFilter(value);
    }

    return (
        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col" onClick={function () { sortById(sort) }}> ID <i class="fas fa-sort"></i></th>
                    <th scope="col"><input type="text" value={myFilter} placeholder="Name" onChange={handleInputChange}></input></th>
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