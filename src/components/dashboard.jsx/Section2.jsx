import styled from "styled-components";
import SectionHeading from "../../ui/SectionHeading";
import ButtonPill from "../../ui/ButtonPill";
import VerticalSection from "../../ui/VerticalSection";
import TwoColumn from "../../ui/TwoColumn";
import VerticalRow from "../../ui/VerticalRow";
import SmallHeading1 from "../../ui/SmallHeading1";
import Para1 from "../../ui/Para1";
import { useNavigate } from "react-router-dom";

const Img = styled.img`
  width: 100%;
`;

export default function Section2() {
  const navigate = useNavigate();

  return (
    <VerticalSection>
      <SectionHeading>Built for businesses</SectionHeading>
      <TwoColumn>
        <Img src="/Layout_Products.svg" />
        <VerticalRow>
          <SmallHeading1>Intuitive for the team</SmallHeading1>
          <Para1>
            A familiar interface that anyone in the team can use. Optimized for
            creating products and processing orders.
          </Para1>
        </VerticalRow>
      </TwoColumn>
      <TwoColumn>
        <Img src="/Cityscape_light.svg" />
        <VerticalRow>
          <SmallHeading1>Connect to other services</SmallHeading1>
          <Para1>
            Configure integrations with any service to drive your business
            forward. Pull product data in from any source, push order data out
            to any destination.
          </Para1>
          <ButtonPill type="purple" onClick={() => navigate("/integrations")}>
            Integrations
          </ButtonPill>
        </VerticalRow>
      </TwoColumn>
      <TwoColumn>
        <Img src="/Layout_Orders.svg" />
        <VerticalRow>
          <SmallHeading1>Insightful reporting</SmallHeading1>
          <Para1>
            Track orders and sales over time. View your top selling products at
            a glance and export sales data in CSV format.
          </Para1>
        </VerticalRow>
      </TwoColumn>
      <TwoColumn>
        <Img src="/dashboardlocalization-.png" />
        <VerticalRow>
          <SmallHeading1>Multi-Merchant & Localization</SmallHeading1>
          <Para1>
            Create multiple merchants under the same account for a global
            presence. Dashboard language support for; English, Spanish,
            Japanese, German, French, Italian, and Portuguese.
          </Para1>
        </VerticalRow>
      </TwoColumn>
    </VerticalSection>
  );
}
