import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: '1', name: 'Nikhil1', age: 26 },
        { id: '2', name: 'Nikhil2', age: 27 }
      ],
      showPerson: false,
      toggleClicked: 0,
      authenticated: false
    }
  }
  // state = {
  //   persons: [
  //     { id: '1', name: 'Nikhil1', age: 26 },
  //     { id: '2', name: 'Nikhil2', age: 27 }
  //   ],
  //   showPerson: false
  // }

  authenticate = () => {
    this.setState({authenticated: true})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice(); OR
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState((prevState, props) => {
      return {
        showPerson: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    })
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    console.log('[getDerivedStateFromProps]', nextProps, prevState);
    return prevState;
  }

  getSnapshotBeforeUpdate = () => {
    console.log('[getSnapshotBeforeUpdate]');
  }

  componentDidUpdate = () => {
    console.log('[componentDidUpdate]');
  }

  render() {
    let persons = null;

    if (this.state.showPerson) {
      persons = <Persons persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />
    }

    return (
      <React.Fragment>
        <Cockpit showPerson={this.state.showPerson} clicked={this.togglePersonsHandler} logIn={this.authenticate}/>
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </React.Fragment>
    );
  }
}

export default withClass(App, classes.App);
