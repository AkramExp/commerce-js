import styled from "styled-components";
import SectionHeading from "../../ui/SectionHeading";
import ButtonPill from "../../ui/ButtonPill";
import MarginSection from "../../ui/MarginSection";
import TwoColumn from "../../ui/TwoColumn";
import VerticalRow from "../../ui/VerticalRow";
import SmallHeading1 from "../../ui/SmallHeading1";
import Para1 from "../../ui/Para1";
import VerticalSection from "../../ui/VerticalSection";
import CardSection2 from "../card-section2/CardSection2";
import { useNavigate } from "react-router-dom";

const Section = styled.section`
  padding: 6rem 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--dark-3);
  gap: 6rem;

  @media screen and (max-width: 500px) {
    padding: 6rem 1rem;
  }
`;

const Img = styled.img`
  width: 100%;
`;

export default function Section5() {
  const navigate = useNavigate();

  return (
    <MarginSection>
      <Section>
        <VerticalSection>
          <SectionHeading type="white">APIs for Commerce</SectionHeading>
          <ButtonPill type="purple" onClick={() => navigate("/commerce-api")}>
            view all apis
          </ButtonPill>
          <CardSection2 />
        </VerticalSection>
        <TwoColumn>
          <Img src="/ChopChop_demo.png" />
          <VerticalRow>
            <SmallHeading1 type="white">
              Open source starter kit for commerce
            </SmallHeading1>
            <Para1 type="white">
              Built with Commerce.js, Next.js, Tailwind CSS, Stripe Elements,
              with one-click deploy to Vercel.
            </Para1>
            {/* <ButtonPill
              type="purple"
              onClick={() => {
                window.location.href =
                  "https://github.com/chec/commercejs-chopchop-demo";
              }}
            >
              view on github
            </ButtonPill> */}
          </VerticalRow>
        </TwoColumn>
      </Section>
    </MarginSection>
  );
}
