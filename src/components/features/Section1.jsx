import styled from "styled-components";
// import Button from "../../ui/Button";

const Section = styled.section`
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  align-items: center;
  justify-content: center;
  height: 70vh;
  gap: 2rem;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    height: 80vh;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
  align-items: flex-start;
  box-shadow: var(--shadow);
  border-radius: 7px;
  padding: 1.9rem;

  h4 {
    margin: 0 0 1rem 0;
    font-weight: 500;
    color: var(--dark-1);
    font-size: 1.3rem;
  }

  p {
    line-height: 1.5rem;
    color: var(--dark-3);
  }
`;

const Heading = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 3.5rem;
  color: var(--dark-1);
  letter-spacing: 1px;

  span {
    font-weight: 500;
    line-height: 2rem;
    font-size: 1.1rem;
  }
`;

export default function Section1() {
  return (
    <Section>
      <Heading>
        Headless. Composable. API-first Commerce.
        <span>
          Full-stack commerce capabilities for next generation businesses and
          creative developers.
        </span>
      </Heading>
      <Card>
        <h4>Latest Updates</h4>
        <p>New features, updates, and improvements every week.</p>
        {/* <Button type="purple2">View changelog</Button> */}
      </Card>
    </Section>
  );
}
