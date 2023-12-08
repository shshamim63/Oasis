import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new Cabin</Button>
      </Modal.Open>
      <Modal.Dialog name="cabin-form">
        <CreateCabinForm />
      </Modal.Dialog>
    </Modal>
  );
}

export default AddCabin;
