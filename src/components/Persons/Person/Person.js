import React, { Component } from 'react';
import classes from './Person.css'
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import {AuthContext} from './../../../containers/App'

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputEle = React.createRef();
    }

    componentDidMount = () => {
        if (this.props.position === 0)
            this.inputEle.current.focus();
    }

    render() {
        return (
            <React.Fragment>
                <AuthContext.Consumer>
                    {auth => auth ? <p>I'm Authenticated</p> : null}
                </AuthContext.Consumer>
                <p onClick={this.props.click}> I'm a {this.props.name} and I'm {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input type="text"
                    ref={this.inputEle}
                    onChange={this.props.changed}
                    value={this.props.name} />
            </React.Fragment>
        )
    }
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    click: PropTypes.func,
    position: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);