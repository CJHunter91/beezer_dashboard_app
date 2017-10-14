import React, { Component } from 'react';
import logo from './logo.svg';
import Users from './containers/Users'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <h1>Accounts Dashboard</h1>
        </header>
        <Users db={this.props.db}/>
      </div>
    );
  }
}

export default App;
