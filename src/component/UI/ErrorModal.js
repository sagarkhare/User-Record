import React from "react";
import ReactDOM from "react-dom";
import Wrapper from "../Helpers/Wrapper";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};
const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onClick}>Okay</Button>
      </footer>
    </Card>
  );
};

function ErrorModal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.errorHandler} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClick={props.errorHandler}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}
export default ErrorModal;

// function ErrorModal(props) {
//   return (
//     // <div>
//     <Wrapper>
//       <div className={classes.backdrop} onClick={props.errorHandler} />
//       <Card className={classes.modal}>
//         <header className={classes.header}>
//           <h2>{props.title}</h2>
//         </header>
//         <div className={classes.content}>
//           <p>{props.message}</p>
//         </div>
//         <footer className={classes.actions}>
//           <Button onClick={props.errorHandler}>Okay</Button>
//         </footer>
//       </Card>
//       </Wrapper>
//     // </div>
//   );
// }
// export default ErrorModal;
