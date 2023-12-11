import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

const filterOptions = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "no-discount",
    label: "No Discount",
  },
  {
    value: "with-discount",
    label: "With Discount",
  },
];

const SortOptions = [
  {
    value: "name-asc",
    label: "Sort by name (A-Z)",
  },
  {
    value: "name-desc",
    label: "Sort by name (Z-A)",
  },
  {
    value: "regularPrice-asc",
    label: "Sort by price (low -> high)",
  },
  {
    value: "regularPrice-desc",
    label: "Sort by price (high -> low)",
  },
  {
    value: "maxCapacity-asc",
    label: "Sort by capacity (low -> high)",
  },
  {
    value: "maxCapacity-desc",
    label: "Sort by capacity (high -> low)",
  },
];

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter filterField="discount" options={filterOptions} />
      <SortBy options={SortOptions} />
    </TableOperations>
  );
}

export default CabinTableOperations;
