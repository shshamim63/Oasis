import { useForm } from "react-hook-form";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { EMAIL_REGEX } from "../../utils/constants";

function SignupForm() {
  const { register, formState, getValues, handleSubmit } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          {...register("fullName", { required: "This field is required" })}
        />
      </FormRow>
      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: EMAIL_REGEX,
              message: "Invalid email address",
            },
          })}
        />
      </FormRow>
      <FormRow label="Password" error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          {...register("password", {
            required: true,
            minLength: {
              value: 8,
              message: "Password must contain at least 8 characters",
            },
          })}
        />
      </FormRow>
      <FormRow
        label="Confirm password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: true,
            validate: (value) =>
              value === getValues().password || "Password need to match",
          })}
        />
      </FormRow>
      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
