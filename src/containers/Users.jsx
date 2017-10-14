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

  userData(){
    this.props.db.ref('users/').once('value').then((snapshot) => {
      this.setState({users: snapshot.val()})
    });
  }

  render(){
    return(
      <section id="users">
      <UsersList db={this.props.db} users={this.state.users}/>
      </section>
      )
  }


}

export default Users;