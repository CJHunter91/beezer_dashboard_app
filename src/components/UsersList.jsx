import React from 'react';

const UsersList = (props) => {

  const users = Object.values(props.users).map((user, index) => {
    return(
      <article key={index} id="user">
      <h4> {user.name} </h4>
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