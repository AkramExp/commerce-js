import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import StyledHeading from "./StyledHeading";
import Form from "./Form";
import Input from "../../ui/Input";
import FormRow from "../../ui/FormRow";
import SubmitButton from "./SubmitButton";
import LinkButton from "./LinkButton";
import Divider from "./Divider";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 0;
  @media screen and (max-width: 500px) {
    img {
      width: 20%;
    }
  }
`;

const PasswordToggle = styled.button`
  margin-left: auto;
  border: none;
  background: none;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: var(--blue-3);
  cursor: pointer;
`;

const Login = styled.p`
  font-size: 15px;
  color: var(--dark-1);

  & a {
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }
`;

const ButtonGroup = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.7rem;

  @media screen and (max-width: 500px) {
    width: 80%;

    img {
      width: 10%;
    }
  }
`;

export default function SignupPageLayout() {
  const [showPassword, setShowPassword] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setShowPassword((show) => !show);
  }

  return (
    <StyledLayout>
      <Logo src="public\logo-icon.png" />

      <StyledHeading>
        Create your free account
        <span>Start selling in 5 minutes</span>
      </StyledHeading>

      <Form>
        <FormRow label="Email address" left="5%">
          <Input
            type="email"
            id="email"
            name="email"
            required={true}
            placeholder=""
            width="20rem"
          />
        </FormRow>

        <FormRow label="Password" left="5%">
          <Input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            required={true}
            placeholder=""
            width="20rem"
          />
        </FormRow>

        <PasswordToggle onClick={handleClick}>
          {showPassword ? "Hide" : "Show"} Password
        </PasswordToggle>

        <SubmitButton>Create your account</SubmitButton>
      </Form>

      <Login>
        Already have an account? <NavLink to="/login">Login</NavLink>
      </Login>

      <Divider>Or</Divider>

      <ButtonGroup>
        <LinkButton>
          <img src="public\google-icon.png" alt="" />
          Login with <span>Google</span>
        </LinkButton>

        <LinkButton>
          <img src="public\github-icon.png" alt="" />
          Login with <span>GitHub</span>
        </LinkButton>
      </ButtonGroup>
    </StyledLayout>
  );
}
