import styled, { css } from "styled-components";

const ButtonPill = styled.button`
  border: none;
  border-radius: 14px;
  padding: 0.5rem 0.8rem;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;

  ${(props) =>
    props.type === "purple" &&
    css`
      color: white;
      background-color: var(--purple-1);

      &:hover {
        background-color: var(--purple-2);
      }
    `}

  ${(props) =>
    props.type === "transparent" &&
    css`
      background: none;
      color: white;
      border: 1px solid white;

      &:hover {
        background-color: white;
        color: black;
      }
    `}

    ${(props) =>
    props.type === "dark" &&
    css`
      background: var(--dark-1);
      color: white;

      &:hover {
        background-color: var(--dark-2);
      }
    `}

    ${(props) =>
    props.type === "dark2" &&
    css`
      color: var(--dark-1);
      border: 1px solid var(--dark-1);
      background-color: white;

      &:hover {
        background-color: var(--dark-1);
        color: white;
      }
    `}

    ${(props) =>
    props.type === "white" &&
    css`
      background: white;
      color: var(--dark-1);

      &:hover {
        background-color: var(--light-blue-1);
      }
    `}

    ${(props) =>
    props.type === "red" &&
    css`
      background: var(--red-3);
      color: white;

      &:hover {
        background-color: var(--red-1);
      }
    `}
`;

export default ButtonPill;
