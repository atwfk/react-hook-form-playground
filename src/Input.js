import React from "react";

const Input = ({ children, type, name, id, register, error, changed }) => {
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={`Enter Your ${children}`}
        ref={register}
        onChange={changed}
      />
      {error && <p>{error.message}</p>}
    </>
  );
};

export default Input;
