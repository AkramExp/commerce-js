import styled from "styled-components";

const SectionHeading = styled.div`
  font-size: 12px;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  color: white;

  &::after {
    content: "";
    display: block;
    height: 0.5px;
    width: 18rem;
    position: absolute;
    top: 50%;
    left: 0;
    background: var(--dark-2);
  }

  &::before {
    content: "";
    display: block;
    height: 0.5px;
    width: 18rem;
    position: absolute;
    top: 50%;
    right: 0;
    background: var(--dark-2);
  }

  @media screen and (max-width: 760px) {
    text-align: center;
    &::after,
    &::before {
      width: 0;
    }
  }
`;

const SectionImage = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  @media screen and (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const Img = styled.img`
  width: 10%;

  @media screen and (max-width: 760px) {
    width: 80%;
  }
`;

export default function Section2() {
  return (
    <div>
      <SectionHeading>
        <span>BRING YOUR OWN GATEWAY OR ONE-CLICK INTEGRATE WITH</span>
      </SectionHeading>
      <SectionImage>
        <Img src="/Razorpaywhite.svg" />
        <Img src="/braintreewhitenow.svg" />
        <Img src="/Stripewhite.svg" />
        <Img src="/square_logo_white.svg" />
        <Img src="/PayPalwhite.svg" />
        <Img src="/Omisegatewaywhite.svg" />
        <Img src="/paystackwhite.svg" />
      </SectionImage>
    </div>
  );
}
