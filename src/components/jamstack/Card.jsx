import styled from "styled-components";
import ButtonPill from "../../ui/ButtonPill";
import { useNavigate } from "react-router-dom";

const Div = styled.div`
  width: 23%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  border-radius: 5px;
  border: 2px solid var(--dark-2);
  padding: 2rem;

  @media screen and (max-width: 500px) {
    width: auto;
  }
`;

const Title = styled.h5`
  color: white;
  font-weight: 500;
  font-size: 1.3rem;
  margin: 0;
`;

const Text = styled.p`
  color: white;
  line-height: 1.7rem;
`;

export default function Card({ item }) {
  const navigate = useNavigate();
  const { title, text, button } = item;

  return (
    <Div>
      <Title>{title}</Title>
      <Text>{text}</Text>
      {button && (
        <ButtonPill type="purple" onClick={() => navigate(button.to?.())}>
          {button.text}
        </ButtonPill>
      )}
    </Div>
  );
}
