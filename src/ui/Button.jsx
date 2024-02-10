import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 1rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 600;
  ${(props) =>
    props.type === "green" &&
    css`
      background-color: var(--green-1);
      color: white;

      &:hover {
        background-color: var(--green-2);
      }
    `}

  ${(props) =>
    props.type === "white" &&
    css`
      background-color: white;
      color: var(--dark-2);

      &:hover {
        background-color: #e6e6e6;
      }
    `}

  ${(props) =>
    props.type === "white2" &&
    css`
      background-color: white;
      border: 1px solid black;

      &:hover {
        color: white;
        background-color: var(--dark-blue-2);
      }
    `}

    ${(props) =>
    props.type === "purple" &&
    css`
      background-color: var(--purple-1);
      color: white;

      &:hover {
        background-color: var(--purple-2);
      }
    `}

    ${(props) =>
    props.type === "purple2" &&
    css`
      background-color: white;
      color: var(--purple-1);
      border: 1px solid var(--purple-1);

      &:hover {
        color: white;
        background-color: var(--purple-1);
      }
    `}

    ${(props) =>
    props.type === "dark" &&
    css`
      background-color: var(--dark-1);
      color: white;

      &:hover {
        background-color: var(--dark-2);
      }
    `}
`;

export default Button;
