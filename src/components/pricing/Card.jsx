import { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

const StyledCard = styled.div`
  padding: 1.5rem 1rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow);
  border-radius: 7px;
`;

const Title = styled.div`
  transition: all 0.5s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  letter-spacing: 0.7px;
  cursor: pointer;
`;

const Button = styled.button`
  background: none;
  border: none;
  transition: all 0.3s;

  & svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const Text = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s;
`;

const Div = styled.div`
  padding-top: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.6rem;
  color: var(--dark-2);
`;

export default function Card({ item }) {
  const { title, text } = item;
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <StyledCard>
      <Title onClick={handleClick}>
        {title}{" "}
        <Button style={{ transform: isOpen && "rotate(-180deg)" }}>
          <IoIosArrowDown />
        </Button>
      </Title>
      <Text style={{ maxHeight: isOpen && "150px" }}>
        <Div>{text}</Div>
      </Text>
    </StyledCard>
  );
}
