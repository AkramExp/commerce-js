import styled from "styled-components";

const Divider = styled.p`
  font-size: 11px;
  font-weight: 500;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  color: var(--dark-1);
  text-transform: uppercase;

  &::after {
    content: "";
    display: block;
    height: 0.5px;
    width: 10rem;
    position: absolute;
    top: 50%;
    left: 32rem;
    background: var(--light-blue-1);
  }

  &::before {
    content: "";
    display: block;
    height: 0.5px;
    width: 10rem;
    position: absolute;
    top: 50%;
    right: 32rem;
    background: var(--light-blue-1);
  }
`;

export default Divider;
