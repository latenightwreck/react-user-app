import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

export default function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserEventHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
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
        <input id='name' type='text' onChange={usernameChangeHandler} />
        <label htmlFor='age'>Age</label>
        <input id='age' type='number' min='0' onChange={ageChangeHandler} />
        <Button type='submit'>Submit</Button>
        {/* <button type='submit'>Submit</button> */}
      </form>
    </Card>
  );
}
