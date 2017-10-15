import React from 'react';
import UserApps from './UserApps'

const UsersList = (props) => {

  const users = Object.keys(props.users).map((userKey, index) => {
    return(
      <article key={index} id="user">
      <h4> {props.users[userKey].name} Account({props.users[userKey].account})</h4>
      <UserApps db={props.db} index={index} accountID={props.users[userKey].account}/>
      </article>
      )
  })

  return(
    <section id="users">
    {users}
    </section>
    )
}

export default UsersList;