/* eslint-disable no-unused-vars -- Remove this line. */
import React, { useState, useEffect } from 'react';
import UserList from './user-list';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState();

  /* your code here (hint: useEffect) */
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.co/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('There was an error!', error);
        setError(error);
      });
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return <UserList users={users} />;
}
