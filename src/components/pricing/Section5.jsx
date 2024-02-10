import styled from "styled-components";
import SectionHeading from "../../ui/SectionHeading";

const Section = styled.section`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const SmallHeading = styled.div`
  font-size: 12px;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  color: var(--dark-1);
  letter-spacing: 1px;

  &::after {
    content: "";
    display: block;
    height: 1px;
    width: 28rem;
    position: absolute;
    top: 50%;
    left: 0;
    background: var(--light-blue-1);
  }

  &::before {
    content: "";
    display: block;
    height: 0.5px;
    width: 28rem;
    position: absolute;
    top: 50%;
    right: 0;
    background: var(--light-blue-1);
  }

  @media screen and (max-width: 500px) {
    &::before,
    &::after {
      width: 0;
    }
  }
`;

const ImageSection = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  flex-wrap: wrap;
`;

const Img = styled.img`
  width: 20%;

  @media screen and (max-width: 500px) {
    width: 39%;
  }
`;

export default function Section5() {
  return (
    <Section>
      <SectionHeading>Build with the best</SectionHeading>
      <SmallHeading>TECHNOLOGY PARTNERS</SmallHeading>
      <ImageSection>
        <Img src="public/contentful_partner.svg" />
        <Img src="public/easyposparner.svg" />
        <Img src="public/vercelpartner.svg" />
        <Img src="public/logo-algolia-nebula-blue-full.svg" />
      </ImageSection>
    </Section>
  );
}
