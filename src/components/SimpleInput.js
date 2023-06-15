import { useEffect, useRef, useState } from "react";

import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  // useRef when you only need to access the data only
  // const nameInputRef = useRef();

  // useState is better for instant validation or to reset the state
  // const [enteredName, setEnteredName] = useState("");
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  // we use this constant to avoid that the component gets rerendered
  // const enteredNameIsValid = enteredName.trim() !== "";
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;

  // useEffect(()=>{
  // here we can add any other the validations
  if (enteredNameIsValid && enteredEmailIsValid) {
    // setFormIsValid(true);
    formIsValid = true;
  }
  // else {
  //   // setFormIsValid(false);
  //   formIsValid = false;
  // }
  // },
  // // add all dependencies that change states
  // [enteredNameIsValid]);

  // was moved to hook
  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);

  //   // if (event.target.value.trim() !== "") {
  //   //   setEnteredNameIsValid(true);
  //   // }
  // };

  // const nameInputBlurHandler = (event) => {
  //   setEnteredNameTouched(true);

  // if (enteredName.trim() === "") {
  //   setEnteredNameIsValid(false);
  // }
  // };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    // setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    // setEnteredNameIsValid(true);

    // We will not use useRef
    // const enteredValue = nameInputRef.current.value;

    // setEnteredName("");
    // setEnteredNameTouched(false);

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses =
    // nameInputIsInvalid
    nameInputHasError ? "form-control invalid" : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          onChange={
            // nameInputChangeHandler
            nameChangeHandler
          }
          onBlur={
            // nameInputBlurHandler
            nameBlurHandler
          }
          value={enteredName}
        />
        {
          // nameInputIsInvalid
          nameInputHasError && (
            <p className="error-text">Name must not be empty.</p>
          )
        }
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
