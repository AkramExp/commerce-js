import styled from "styled-components";
// import ButtonPill from "../../ui/ButtonPill";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
  align-items: flex-start;
  box-shadow: var(--shadow);
  border-radius: 7px;
  padding: 1.9rem;
  background-color: white;

  button {
    margin: 0;
  }
`;

const Title = styled.h4`
  margin: 0 0 1rem 0;
  font-weight: 500;
  color: var(--dark-1);
  font-size: 1.3rem;
`;

const P = styled.p`
  line-height: 1.5rem;
  color: var(--dark-3);
`;

export default function Card({ item }) {
  const { title, text } = item;

  return (
    <StyledCard>
      <Title>{title}</Title>
      <P>{text}</P>
      {/* {button && <ButtonPill type="dark2">{button}</ButtonPill>} */}
    </StyledCard>
  );
}
