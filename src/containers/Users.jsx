import React, {Component} from 'react';
import UsersList from '../components/UsersList'

class Users extends Component{

  constructor(props){
    super(props);
    this.state = {
      users: []
    }
    this.userData();
  }


  accountData(account){
    this.props.db.ref(`accounts/${account}`).on('value', (snapshot) => {
      console.log(snapshot.val())
    });
  }

  userData(){
    this.props.db.ref('users/').once('value').then((snapshot) => {
      this.setState({users: snapshot.val()})
    });
  }

  render(){
    return(
      <section id="users">
      <UsersList users={this.state.users}/>
      </section>
      )
  }


}

export default Users;