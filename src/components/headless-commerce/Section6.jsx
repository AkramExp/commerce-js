import styled from "styled-components";
import SectionHeading from "../../ui/SectionHeading";
import TwoColumn from "../../ui/TwoColumn";
import VerticalRow from "../../ui/VerticalRow";
import VerticalSection from "../../ui/VerticalSection";
import Text from "./Text";
// import Button from "../../ui/Button";

const List = styled.ul`
  margin: 1rem 0;
`;

const Img = styled.img`
  width: 100%;
`;

export default function Section6() {
  return (
    <VerticalSection>
      <SectionHeading>The benefits of headless</SectionHeading>
      <TwoColumn>
        <VerticalRow>
          <Text>
            Headless commerce helps businesses:
            <List>
              <li>Choose the services to use on the frontend and backend</li>{" "}
              <li>
                Determine the look and feel of every customer facing touchpoint
              </li>
              <li>
                Convert customers with a checkout that can be placed anywhere
              </li>
              <li>
                Optimize conversion experiences through granular A/B testing
              </li>
              <li>
                Experiment with alternative business models and new markets
              </li>
              <li>Offer QR code, crypto, and alternative payment methods</li>
              <li>Improve and control page load time and interaction speeds</li>
              <li>
                Effciently scale frontend experiences from the same backends
              </li>
            </List>
            The benefit of headless comes down to data and experience control,
            with the ability to move at the speed you need when making mission
            critical business decisons.
            <br />
            <br />
            If your business needs to level up its online presence, headless
            commerce gives you the ability to get there on your own terms.
          </Text>
          {/* <Button type="purple">Speak to an expert</Button> */}
        </VerticalRow>
        <Img src="/djkfsdaf.gif" />
      </TwoColumn>
    </VerticalSection>
  );
}
