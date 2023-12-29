import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import Avatar from "../features/authentication/Avatar";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

function Header() {
  return (
    <StyledHeader>
      <Avatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
