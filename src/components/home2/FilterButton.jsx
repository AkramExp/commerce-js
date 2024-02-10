import styled from "styled-components";

const Button = styled.button`
  text-decoration: none;
  border: none;
  background: none;
  color: white;
  padding: 0.6rem 0.8rem;
  border-radius: 40px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
`;

export default function FilterButton({ children, active, onClick }) {
  return (
    <Button
      onClick={onClick}
      style={{
        backgroundColor: active && "var(--dark-1)",
      }}
    >
      {children}
    </Button>
  );
}
