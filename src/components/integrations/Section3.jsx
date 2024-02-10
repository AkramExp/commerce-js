import styled from "styled-components";
import Button from "../../ui/Button";
import MarginSection from "../../ui/MarginSection";
import TwoColumn from "../../ui/TwoColumn";
import SmallHeading1 from "../../ui/SmallHeading1";
import Para1 from "../../ui/Para1";
import ButtonGroup from "../../ui/ButtonGroup";
import VerticalRow from "../../ui/VerticalRow";

const Section = styled.section`
  background-color: var(--light-blue-5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 12rem 3rem;
  margin-top: 4rem;

  @media screen and (max-width: 500px) {
    padding: 0 1rem 2rem;
  }
`;

const Img = styled.img`
  width: 90%;
`;

export default function Section3() {
  return (
    <MarginSection>
      <Section>
        <TwoColumn>
          <Img src="/API.svg" />
          <VerticalRow>
            <SmallHeading1>Are we missing an integration?</SmallHeading1>
            <Para1>
              Tell us what integrations we should build next, or build your own!
            </Para1>
            <ButtonGroup>
              {/* <Button type="purple">Let us Know!</Button> */}
              <Button
                type="dark"
                onClick={() => {
                  window.location.href =
                    "https://github.com/chec/integration-template";
                }}
              >
                Build your own!
              </Button>
            </ButtonGroup>
          </VerticalRow>
        </TwoColumn>
      </Section>
    </MarginSection>
  );
}
