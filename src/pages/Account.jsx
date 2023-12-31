import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserForm from "../features/authentication/UpdateUserForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Account() {
  return (
    <>
      <Heading as="h1">Update your account</Heading>
      <Row>
        <Heading as="h3">Update user data</Heading>
        <UpdateUserForm />
      </Row>
      <Row>
        <Heading as="h3">Update user password</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
