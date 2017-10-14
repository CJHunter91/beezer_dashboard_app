import React from 'react';

const UsersList = (props) => {

  const users =
  Object.values(props.users).map((user) => {
    console.log(user)
    return(
      <li>{user.name}</li>
      )
  })

  return(
    <section id="users">
    {users}
    </section>
    )
}

export default UsersList;