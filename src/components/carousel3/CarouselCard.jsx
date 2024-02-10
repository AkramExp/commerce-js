import styled from "styled-components";

const StyledCard = styled.div`
  display: inline-flex;
  flex-direction: column;
  background-color: var(--dark-1);
  padding: 2rem;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem;
    gap: 2rem;
  }
`;

const Icon = styled.img`
  width: 5rem;
`;

const Text = styled.p`
  white-space: normal;
  color: white;
  font-style: italic;
  font-size: 1rem;
  line-height: 1.7rem;
  word-spacing: 1.5px;

  @media screen and (max-width: 760px) {
    /* width: 300px; */
  }
`;

const Company = styled.p`
  color: var(--light-blue-1);
  margin: 0;
  letter-spacing: 1px;
  font-weight: 400;
  font-size: 10px;
  text-transform: uppercase;
  margin-top: 5px;
`;

const Name = styled.p`
  color: white;
  margin: 0;
  font-size: 0.9rem;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default function CarouselCard({ item }) {
  const { icon, name, company, text } = item;

  return (
    <StyledCard>
      <Icon src={`/${icon}`} />
      <Text>{`"${text}"`}</Text>
      <Div>
        <Name>{name}</Name>
        <Company>{company}</Company>
      </Div>
    </StyledCard>
  );
}
