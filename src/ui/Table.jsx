import PropTypes from "prop-types";

import styled from "styled-components";

import { createContext, useContext } from "react";

const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;
`;

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable>{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <StyledHeader columns={columns} as="header">
      {children}
    </StyledHeader>
  );
}

function Row({ children }) {
  const { columns } = useContext(TableContext);

  return <StyledRow columns={columns}>{children}</StyledRow>;
}
function Body({ data, render }) {
  if (!data.length) return <Empty>No Data to show</Empty>;

  return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

Table.propTypes = {
  columns: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};
Body.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        maxCapacity: PropTypes.number.isRequired,
        regularPrice: PropTypes.number.isRequired,
        created_at: PropTypes.string.isRequired,
        discount: PropTypes.number.isRequired,
        image: PropTypes.string,
      }),
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        created_at: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        numNights: PropTypes.number,
        numGuests: PropTypes.number,
        status: PropTypes.string.isRequired,
        totalPrice: PropTypes.number,
        cabins: PropTypes.shape({
          name: PropTypes.string.isRequired,
        }),
        guests: PropTypes.shape({
          email: PropTypes.string.isRequired,
          fullName: PropTypes.string.isRequired,
        }),
      }),
    ])
  ),
  render: PropTypes.func.isRequired,
};

export default Table;
