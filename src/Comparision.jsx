import React from 'react';
import PrintArrayComparision from './printarraycomp';

const comparisiontable = (props) => {
    return (
        <div className="container">
            <h2>PCN Comparision</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Field</th>
                        <th>PCN Stage 1</th>
                        <th>PCN Stage 2</th>
                    </tr>
                </thead>
                {Object.getOwnPropertyNames(props.pcnOne).map((property,key) => {

                    return Array.isArray(props.pcnOne[property]) && Array.isArray(props.pcnTwo[property]) ? <PrintArrayComparision key={key} array1={props.pcnOne[property]} array2={props.pcnTwo[property]} /> :
                        <tbody key={key}>
                            <tr className={props.pcnOne[property] === props.pcnTwo[property] ? "hide" : "danger"}>
                                <td>{property}</td>
                                <td>{props.pcnOne[property]}</td>
                                <td>{props.pcnTwo[property]}</td>
                            </tr>
                        </tbody>
                })}
            </table>
        </div>
    );
}

export default comparisiontable;