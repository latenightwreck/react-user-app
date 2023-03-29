import ReactDOM from 'react-dom';
import Button from './Button';
import Card from './Card';
import classes from './ErrorModal.module.css';

export default function ErrorModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onHandleError={props.onHandleError} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <Modal
          onHandleError={props.onHandleError}
          title={props.title}
          message={props.message}
        />,
        document.getElementById('modal-root')
      )}
    </>
  );
}

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHandleError} />;
};

function Modal(props) {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onHandleError}>
          {props.buttonTitle || 'Close'}
        </Button>
      </footer>
    </Card>
  );
}
