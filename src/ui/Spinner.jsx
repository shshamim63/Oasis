import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-left: 4px solid var(--color-brand-600);
  width: 6.4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  margin: 4.8rem auto;
`;

export default Spinner;
