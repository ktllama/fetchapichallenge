import React, { useState, useEffect } from 'react';
import Main from './Main';

const Users = (props) => {
    const [users, setUsers] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => JSON.stringify(json))
            .then(json => setUsers(json));
    }, [users, setUsers]);

    // useEffect(() => {
    //     const userList = users.map((user) => { return (
    //         <li key={user.id}>
    //             {user}
    //         </li>
    //         )});

    //     return () => {
    //       setUsers('');
    //     };
    //   },[users, setUsers]);

    return(
      <>
      <Main />
      {users.map((user) => {
          return(
          <li key={user.id}>
              {user}
          </li>
          )
      })}
      </>
    )
};

export default Users;