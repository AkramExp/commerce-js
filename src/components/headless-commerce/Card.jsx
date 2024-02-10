import styled from "styled-components";
import ButtonPill from "../../ui/ButtonPill";
import VerticalRow from "../../ui/VerticalRow";

const StyledCard = styled.div`
  background: var(--dark-1);
  border-radius: 7px;
  padding: 2rem;
  transition: all 0.2s;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 2rem;
  margin: 0;
  color: white;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.7rem;
  color: white;
  margin: 0;
`;

const Img = styled.img`
  width: 5rem;
`;

export default function Card({ item }) {
  const { icon, title, text, button } = item;

  return (
    <StyledCard>
      <VerticalRow>
        <Img src={`public/${icon}`} alt="" />
        <Title>{title}</Title>
        <Text>{text}</Text>
        {button && <ButtonPill type="white">{button}</ButtonPill>}
      </VerticalRow>
    </StyledCard>
  );
}
