import PropTypes from "prop-types";

import styled from "styled-components";
import { IoIosCopy } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";

import CreateCabinForm from "./CreateCabinForm";

import { useDeleteCabin } from "./useDeleteCabin";
import { formatCurrency } from "../../utils/currency";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const { deleteCabin, isDeleting } = useDeleteCabin();
  const { createCabin, isCreating } = useCreateCabin();
  const isWorking = isDeleting || isCreating;

  const {
    id: cabinId,
    image,
    name,
    regularPrice,
    discount,
    description,
    maxCapacity,
  } = cabin;

  function handleDuplicate() {
    createCabin({
      name: `Copy of ${name}`,
      regularPrice,
      discount,
      description,
      maxCapacity,
      image,
    });
  }

  return (
    <>
      <TableRow role="row">
        <Img src={image} alt={name} />
        <Cabin>{name}</Cabin>
        <div>Fits up to {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        <Discount>{formatCurrency(discount)}</Discount>
        <div>
          <button onClick={handleDuplicate} disabled={isWorking}>
            <IoIosCopy />
          </button>
          <Modal>
            <Modal.Open opens="cabin-edit">
              <button disabled={isWorking}>
                <CiEdit />
              </button>
            </Modal.Open>
            <Modal.Dialog name="cabin-edit">
              <CreateCabinForm cabinToEdit={cabin} />
            </Modal.Dialog>
            <Modal.Open opens="cabin-delete">
              <button disabled={isWorking}>
                <FaTrashAlt />
              </button>
            </Modal.Open>
            <Modal.Dialog name="cabin-delete">
              <ConfirmDelete
                resourceName="cabins"
                disabled={isDeleting}
                onConfirm={() => deleteCabin(cabinId)}
              />
            </Modal.Dialog>
          </Modal>
        </div>
      </TableRow>
    </>
  );
}

CabinRow.propTypes = {
  cabin: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    maxCapacity: PropTypes.number.isRequired,
    regularPrice: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
    discount: PropTypes.number.isRequired,
    image: PropTypes.string,
  }),
};

export default CabinRow;
