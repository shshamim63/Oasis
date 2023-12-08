import PropTypes from "prop-types";
import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmDelete({
  resourceName,
  onConfirm,
  onCloseModal,
  disabled = false,
}) {
  return (
    <StyledConfirmDelete>
      <Heading as="h3">Delete {resourceName}</Heading>
      <p>Are you sure? Do you want to remove {resourceName} permanently?</p>
      <div>
        <Button
          variation="secondary"
          onClick={onCloseModal}
          disabled={disabled}
        >
          Cancel
        </Button>
        <Button variation="danger" onClick={onConfirm} disabled={disabled}>
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

ConfirmDelete.propTypes = {
  resourceName: PropTypes.string.isRequired,
  onConfirm: PropTypes.func,
  onCloseModal: PropTypes.func,
  disabled: PropTypes.bool,
};

export default ConfirmDelete;
