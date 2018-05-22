import React from 'react';
import classes from './Cockpit.css';
//import Aux from './../../hoc/Aux'

const Cockpit = (props) => {
    let btnClass = classes.button;

    if(props.showPerson)    btnClass = [classes.button, classes.red].join(' ');

    return (
        <React.Fragment>
            <h1>Hi, I'm a react app</h1>
            <p>This is really working.</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
                <button onClick={props.logIn}>LogIn</button>
        </React.Fragment>
    )
}

export default Cockpit;