import { NavLink } from "react-router-dom";
import styled from "styled-components";
import StyledHeading from "./StyledHeading";
import Form from "./Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Divider from "./Divider";
import LinkButton from "./LinkButton";
import SubmitButton from "./SubmitButton";
import Logo from "./Logo";

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

const Signup = styled.p`
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

export default function LoginPageLayout() {
  return (
    <StyledLayout>
      <Logo src="/logo-icon.png" />

      <StyledHeading>Login to Check Dashboard</StyledHeading>

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
            type="password"
            id="password"
            name="password"
            required={true}
            placeholder=""
            width="20rem"
          />
        </FormRow>

        <SubmitButton>Login</SubmitButton>
      </Form>

      <Signup>
        New here? <NavLink to="/signup">Sign up</NavLink>
      </Signup>

      <Divider>Or</Divider>

      <ButtonGroup>
        <LinkButton>
          <img src="/fb-icon.png" alt="" />
          Login with <span>Facebook</span>
        </LinkButton>

        <LinkButton>
          <img src="/google-icon.png" alt="" />
          Login with <span>Google</span>
        </LinkButton>

        <LinkButton>
          <img src="/github-icon.png" alt="" />
          Login with <span>GitHub</span>
        </LinkButton>
      </ButtonGroup>
    </StyledLayout>
  );
}
