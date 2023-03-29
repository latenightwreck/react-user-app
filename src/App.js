import React from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const users = [
    { id: 1, name: 'Morgan', age: '32' },
    { id: 2, name: 'Allison', age: '31' },
  ];
  return (
    <div>
      <AddUser />
      <UsersList users={users} />
    </div>
  );
}

export default App;
