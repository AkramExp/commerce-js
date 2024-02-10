import styled, { css } from "styled-components";

const StyledCard = styled.div`
  background: none;
  border-radius: 7px;
  padding: 1.5rem 2rem;

  ${(props) =>
    props.type === "white" &&
    css`
      background-color: white;
      border-radius: 5px;
    `}

  @media screen and (max-width: 500px) {
    padding: 0.8rem;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 1.25rem;
`;

const Text = styled.p`
  line-height: 1.7rem;
`;

const Img = styled.img`
  @media screen and (max-width: 500px) {
    width: 25%;
  }
`;

export default function Card({ item, type }) {
  const { icon, title, text } = item;

  return (
    <StyledCard type={type}>
      <Row>
        <Img src={`public/${icon}.svg`} alt="" />
        <Title>{title}</Title>
      </Row>
      <Text>{text}</Text>
    </StyledCard>
  );
}
