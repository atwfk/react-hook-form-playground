import React from "react";

const Input = ({ children, type, name, register }) => {
  return (
    <>
      <label htmlFor={name}>{children}</label>
      <input
        type={type}
        name={name}
        placeholder={`Enter Your ${children}`}
        ref={register({ required: true })}
      />
      <p></p>
    </>
  );
};

export default Input;
