import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: var(--dark-1);
  border: none;
  background-color: white;
  box-shadow: 0 0 1px rgba(40, 51, 65, 0.1), 0 1px 2px rgba(40, 51, 65, 0.1),
    0 1px 3px rgba(40, 51, 65, 0.1);
  border-radius: 5px;
  padding: 0.8rem 1rem;
  cursor: pointer;

  & img {
    width: 25px;
    margin-right: 7px;
  }

  & span {
    margin-left: 3px;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }

  @media screen and (max-width: 500px) {
    img {
      width: 20px;
    }
  }
`;

export default function LinkButton({ children }) {
  return <Button>{children}</Button>;
}
