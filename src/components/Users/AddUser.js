import { useRef, useState } from 'react';
import Wrapper from '../Helpers/Wrapper';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

export default function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserEventHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
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
      name: enteredName,
      age: enteredAge,
    };

    props.onAddUser(userData);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
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
          <input id='name' type='text' ref={nameInputRef} />
          <label htmlFor='age'>Age</label>
          <input id='age' type='number' min='0' ref={ageInputRef} />
          <Button type='submit'>Submit</Button>
          {/* <button type='submit'>Submit</button> */}
        </form>
      </Card>
    </Wrapper>
  );
}
