import React from "react";
import "./index.css";
import Input from "./Input";
import { useForm } from "react-hook-form";

const formatPhoneNumber = (value) => {
  return (
    value
      .replace(/\s/g, "")
      .match(/.{1,3}/g)
      ?.join(" ")
      .substr(0, 19) || ""
  );
};

function App() {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => console.log(data);
  return (
    <div className="App">
      <h1>SignUp Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          name="firstName"
          register={register({
            required: "FIRST NAME REQUIRED",
            minLength: {
              value: 3,
              message: "FIRST NAME MUST BE LONGER THAN 3",
            },
            maxLength: {
              value: 8,
              message: "FIRST NAME MUST BE SHORTER THAN 3",
            },
          })}
          error={errors.firstName}
        >
          First Name
        </Input>
        <Input
          type="text"
          name="lastName"
          register={register({
            required: "LAST NAME REQUIRED",
            minLength: {
              value: 3,
              message: "LAST NAME MUST BE LONGER THAN 3",
            },
            maxLength: {
              value: 8,
              message: "LAST NAME MUST BE SHORTER THAN 3",
            },
          })}
          error={errors.lastName}
        >
          Last Name
        </Input>
        <Input
          type="email"
          name="email"
          register={register({
            required: "EMAIL REQUIRED",
          })}
          error={errors.email}
        >
          E-mail
        </Input>
        <Input
          type="password"
          name="password"
          register={register({
            required: "PASSWORD REQUIRED",
            minLength: {
              value: 5,
              message: "PASSWORD MUST BE LONGER THAN 5",
            },
          })}
          error={errors.password}
        >
          Password
        </Input>
        <Input
          type="text"
          name="number"
          register={register({
            required: "PHONE NUMBER REQUIRED",
            minLength: {
              value: 14,
              message: "PHONE NUMBER BE 11 DIGITS",
            },
            maxLength: {
              value: 14,
              message: "PHONE NUMBER BE 11 DIGITS",
            },
          })}
          error={errors.number}
          changed={(event) => {
            const { value } = event.target;
            event.target.value = formatPhoneNumber(value);
          }}
        >
          Phone
        </Input>
        <Input type="submit" />
      </form>
    </div>
  );
}

export default App;
