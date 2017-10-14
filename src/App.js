import React, { Component } from 'react';
import logo from './logo.svg';
import Users from './containers/Users'
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      users: []
    }
    this.userData();
  }

  userData(){
    this.props.db.ref('users/').once('value').then((snapshot) => {
      this.setState({users: snapshot.val()})
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Accounts Dashboard</h1>
        </header>
        <Users users={this.state.users}/>
      </div>
    );
  }
}

export default App;
