import React from 'react';

function App_Child(props){
    return (
        <div>
            <h1>This file has been modified by {props.name} on {props.date}</h1>
            <p>The work has been done as part of {props.assignment}</p>
        </div>
    )
}

export default App_Child;