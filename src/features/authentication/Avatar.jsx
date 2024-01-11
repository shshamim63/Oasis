import styled from "styled-components";
import { useUser } from "./useUser";

const StyledAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-grey-600);
`;

const StyledImage = styled.img`
  display: block;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

function Avatar() {
  const { user } = useUser();

  if (!user) return;

  const { fullName, avatar } = user.user_metadata;

  return (
    <StyledAvatar>
      <StyledImage
        src={avatar || "default-user.png"}
        alt={fullName || "demo"}
      />
      <span>{fullName}</span>
    </StyledAvatar>
  );
}

export default Avatar;
