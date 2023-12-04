import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";

function CreateCabinForm() {
  return (
    <Form>
      <FormRow label='Cabin name' error={"hello"}>
        <input type="text" id="name" />
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
