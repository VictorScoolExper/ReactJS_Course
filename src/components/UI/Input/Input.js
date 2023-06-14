// the useImperativeHandle lets us use functions imperatively, that means we can call it directly and not tradition state management
import React, { useEffect, useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  // when you have an empty array, it will only run once the component has loaded.
  // useEffect(() => {
  //   // focus is a property through the input dom
  //   inputRef.current.focus();
  // }, []);

  const activate = () => {
    inputRef.current.focus();
  };
  // ref is passed from component
  useImperativeHandle( ref,()=>{
    return{
      // we point it to our function we will use as imperative, notice that "focus" can be anything else
      // gets exposed in short terms
      focus: activate 
    }
  })

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
