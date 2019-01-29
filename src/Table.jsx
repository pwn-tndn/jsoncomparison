import React from 'react';

const table = (props) => {
    return (
        <div className="container">
            <h2>Striped Rows</h2>
            <p>The .table-striped class adds zebra-stripes to a table:</p>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.employees.map((employee,key) => (
                            <tr key={key}>
                                <td>{key+1}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                            </tr>
                        )) 
                    }
                    {props.showForm ? 
                        <tr>
                            <td><input type="text" onChange={props.addData} name="firstName"/></td>
                            <td><input type="text" onChange={props.addData} name="lastName" /></td>
                            <td><input type="text" onChange={props.addData} name="email" /></td>
                            <td><button className="btn-success" onClick={props.addEmployee}>ADD DATA</button></td>
                        </tr> : null
                    }
                </tbody>
            </table>
            <button className="btn-danger" onClick={props.toggleAdd}>Add Employee</button>
        </div>
    );
}

export default table;