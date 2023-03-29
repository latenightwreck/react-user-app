import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

export default function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserEventHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    const userData = {
      name: enteredUsername,
      age: enteredAge,
    };

    props.onAddUser(userData);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserEventHandler}>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          type='text'
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor='age'>Age</label>
        <input
          id='age'
          type='number'
          min='0'
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type='submit'>Submit</Button>
        {/* <button type='submit'>Submit</button> */}
      </form>
    </Card>
  );
}
