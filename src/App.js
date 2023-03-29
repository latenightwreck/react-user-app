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
    <div>
      <AddUser onAddUser={usersListHandler}/>
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
