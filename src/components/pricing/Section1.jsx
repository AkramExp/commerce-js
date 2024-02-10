import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;

const SectionHeading = styled.h1`
  color: var(--dark-1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  font-size: 2.25rem;
  font-weight: 500;

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  & span {
    color: var(--dark-2);
    font-weight: 400;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;

export default function Section1() {
  return (
    <Section>
      <SectionHeading>
        Flexible pricing for growing businesses
        <div>
          <span>Build for free, scale up as your sales grow.</span>
          <span>Full API access for all plans.</span>
          <span>Prices in USD.</span>
        </div>
      </SectionHeading>
    </Section>
  );
}
