import React from 'react';

function AppChild(props){
    return (
        <div>
            <h1>This file has been modified by {props.name} on {props.date}</h1>
            <hr/>
            <p>The work has been done as part of {props.assignment}</p>
        </div>
    )
}

export default AppChild;