import styled from "styled-components";

const TextArea = styled.textarea`
  width: ${(props) => props.width};
  padding: 1.4rem 1rem 0.4rem;
  border: none;
  box-shadow: 0 0 1px rgba(40, 51, 65, 0.1), 0 1px 2px rgba(40, 51, 65, 0.1),
    0 1px 3px rgba(40, 51, 65, 0.1);
  border-radius: 5px;
  outline: none;
  font-size: 15px;

  &:focus {
    border: 4px solid var(--light-blue-1);
  }

  &:not(:placeholder-shown) {
    background-color: var(--light-blue-4);
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: 12%;
    font-size: 12px;
  }
`;

export default TextArea;
