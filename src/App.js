import React, { Component } from 'react';
import Users from './containers/Users'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <h1 id="title">Accounts Dashboard</h1>
        </header>
        <Users db={this.props.db}/>
      </div>
    );
  }
}

export default App;
