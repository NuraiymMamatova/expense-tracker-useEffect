import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Button from "../UI/button/Button";
import Card from "../UI/card/Card";
import FormInput from "../UI/input/FormInput";

const Login = ({ setIsUserLogined }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCorrectEmail, setIsCorrectEmail] = useState(false);
  const [isCorrectPassowrd, setIsCorrectPassowrd] = useState(false);

  useEffect(() => {
    setIsCorrectEmail(validateEmail(email));
    setIsCorrectPassowrd(validatePassword(password));
    console.log(isCorrectEmail, isCorrectPassowrd);
  }, [email, password]);

  const validateEmail = (email) => {
    const regexForEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return regexForEmail.test(email);
  };

  const validatePassword = (password) => {
    const regexForPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;
    return regexForPassword.test(password);
  };

  const onInputChangeValueHandler = (event) => {
    const valueFromInput = event.target.value;
    if (event.target.type === "email") {
      setEmail(valueFromInput);
    } else {
      setPassword(valueFromInput);
    }
  };

  const onLogin = () => {    
    const user = {
      email,
      password,
    };
    setIsUserLogined(true);
    localStorage.setItem("USER", JSON.stringify(user));
  };

  return (
    <StyledCard>
      <StyledForm>
        <FormInput
          label="Email"
          containerClassName="field"
          error={isCorrectEmail}
          type={"email"}
          value={email}
          onChange={onInputChangeValueHandler}
        />
        <FormInput
          label="Password"
          containerClassName="field"
          type="password"
          error={isCorrectPassowrd}
          value={password}
          onChange={onInputChangeValueHandler}
        />
        <StyledButton
          disabled={!isCorrectEmail || !isCorrectPassowrd}
          onClick={onLogin}
          type="button"
        >
          {/* changed type="submit" to type="button" */}
          Login
        </StyledButton>
      </StyledForm>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  width: 50rem;
  max-width: 90%;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  margin-top: 5rem;
`;

const StyledForm = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .field {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .field > label {
    flex: 1;
  }
  .field > input {
    flex: 5;
  }
`;
const StyledButton = styled(Button)`
  align-self: center;
`;

export default Login;
