import React, {Component} from 'react';
import UsersList from '../components/UsersList'

class Users extends Component{

  render(){
    return(
      <section id="users">
        <UsersList users={this.props.users}/>
      </section>
      )
  }


}

export default Users;