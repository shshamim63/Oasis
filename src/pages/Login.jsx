import styled from "styled-components";

import Logo from "../ui/Logo";
import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  background-color: var(--color-grey-50);
  align-content: center;
  justify-content: center;
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4" type="h4">
        {" "}
        Log in to your account
      </Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
