import { useState } from 'react';
import Wrapper from '../Helpers/Wrapper';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

export default function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserEventHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Required Data Missing',
        message: 'Please make sure that Name and Age are filled.',
      });
      return;
    }
    if (+enteredAge <= 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please make sure Age is greater than or equal to 1.',
      });
      return;
    }
    const userData = {
      id: Math.random().toString(),
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

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onHandleError={errorHandler}
        />
      )}
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
    </Wrapper>
  );
}
