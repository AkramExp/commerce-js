import styled from "styled-components";

const SectionHeading = styled.div`
  font-size: 10px;
  letter-spacing: 1px;
  position: relative;
  display: flex;
  justify-content: center;
  color: var(--dark-1);

  &::after {
    content: "";
    display: block;
    height: 0.2px;
    width: 22rem;
    position: absolute;
    top: 50%;
    left: 0;
    background: var(--light-blue-1);
  }

  &::before {
    content: "";
    display: block;
    height: 0.5px;
    width: 22rem;
    position: absolute;
    top: 50%;
    right: 0;
    background: var(--light-blue-1);
  }

  @media screen and (max-width: 760px) {
    &::after,
    &::before {
      width: 3rem;
    }
  }
`;

const SectionImage = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;

  @media screen and (max-width: 760px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const Img = styled.img`
  width: 12%;

  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

export default function Brands({ title }) {
  return (
    <div>
      <SectionHeading>
        <span>{title}</span>
      </SectionHeading>
      <SectionImage>
        <Img src="/blume.png" />
        <Img src="/house-of-stole.png" />
        <Img src="/ira.png" />
        <Img src="/leon-and-george.png" />
        <Img src="/reid.png" />
        <Img src="/wholly-veggie.png" />
      </SectionImage>
    </div>
  );
}
