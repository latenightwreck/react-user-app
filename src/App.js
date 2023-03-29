import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const usersListHandler = (userData) => {
    setUsersList((prevUsers) => {
      return [userData, ...prevUsers];
    });
  };

  const [usersList, setUsersList] = useState([]);
  return (
    <>
      <AddUser onAddUser={usersListHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
