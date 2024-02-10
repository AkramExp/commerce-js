import styled, { css } from "styled-components";

const StyledCard = styled.div`
  width: 23%;
  background: none;
  border-radius: 3px;
  padding: 2rem;
  transition: all 0.2s;

  ${(props) =>
    props.type === "dynamic" &&
    css`
      box-shadow: var(--shadow);
      cursor: pointer;

      &:hover {
        box-shadow: var(--shadow-dark);
      }
    `}

  ${(props) =>
    props.type === "static" &&
    css`
      border: 2px solid var(--light-blue-1);
    `}

    @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 1.4rem;
  margin: 0;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6rem;
  color: var(--dark-1);
`;

const Img = styled.img`
  width: 4.8rem;
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
