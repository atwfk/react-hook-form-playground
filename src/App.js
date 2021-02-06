import React from "react";
import Input from "./Input";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
  });
  return (
    <div className="App">
      <h1>SignUp Form</h1>
      <form>
        <Input type="text" name="firstName">
          First Name
        </Input>
        <Input type="text" name="lastName">
          Last Name
        </Input>
        <Input type="email" name="email">
          E-mail
        </Input>
        <Input type="password" name="password">
          Password
        </Input>
        <Input type="number" name="number">
          Phone
        </Input>
      </form>
    </div>
  );
}

export default App;
