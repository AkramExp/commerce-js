import styled from "styled-components";

const StyledCard = styled.div`
  display: inline-flex;
  flex-direction: column;
  background: none;
  border: 2px solid var(--dark-2);
  border-radius: 7px;
  padding: 2rem;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 1px 10px 2px var(--dark-2);
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem;
    gap: 2rem;
    margin: 0 0.5rem;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.h1`
  color: white;
  font-weight: 400;
  font-size: 1.25rem;
`;

const Text = styled.p`
  font-size: 1rem;
  color: white;
  line-height: 1.7rem;
  white-space: normal;
`;

export default function CaouselCard({ item }) {
  const { icon, title, text } = item;

  return (
    <StyledCard>
      <Row>
        <img src={`public/${icon}.svg`} alt="" />
        <Title>{title}</Title>
      </Row>
      <Text>{text}</Text>
    </StyledCard>
  );
}
