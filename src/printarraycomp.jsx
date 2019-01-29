import React from 'react';
import _ from 'lodash';
import './printarraycomp.css'

const printarraycomp = (props) => {
    let equalProperties = false;
    for (let i = 0; i < props.array1.length; i++) {
        equalProperties = _.isEqual(Object.getOwnPropertyNames(props.array1[i]), Object.getOwnPropertyNames(props.array2[i]));
    }

    let propertyNames = Object.getOwnPropertyNames(props.array1[0]);

    console.log(propertyNames)
    return equalProperties ? (
        <React.Fragment>
            <thead>
                <tr>
                    <th>S.No</th>
                    {propertyNames.map((property, key) => { return <th key={key} colSpan="2">{property}</th> })}
                </tr>
                <tr>
                    <th></th>
                    {propertyNames.map((property, key) => {
                        return <React.Fragment key={key}>
                            <th>Stage1</th>
                            <th>Stage2</th>
                        </React.Fragment>
                    })}
                </tr>
            </thead>
            <tbody>
                {
                    props.array1.map((property, key1) => {
                        return (
                            <tr key={key1}>
                                {
                                    propertyNames.map((prop, key) => {
                                        let cssValue =  _.isEqual(props.array1[key1][prop], props.array2[key1][prop]) ? "hide" : "danger" 
                                    return (
                                            <React.Fragment key={key}>
                                                <td className={cssValue}>{key1 + 1}</td>
                                                <td className={cssValue}>{props.array1[key1][prop]}</td>
                                                <td className={cssValue}>{props.array2[key1][prop]}</td>
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </React.Fragment>
    ) : null;
}

export default printarraycomp;