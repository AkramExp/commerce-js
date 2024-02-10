import styled from "styled-components";
import SectionHeading from "../../ui/SectionHeading";
import ButtonPill from "../../ui/ButtonPill";
import VerticalSection from "../../ui/VerticalSection";
import { useNavigate } from "react-router-dom";

const Img = styled.img`
  width: 100%;
  margin: 2rem 0;
`;

export default function Section6() {
  const navigate = useNavigate();

  return (
    <VerticalSection>
      <SectionHeading>
        More than a powerful API, enjoy our beautiful dashboard
        <span>
          Create products, manage orders, fulfill shipments, and process
          customers.
        </span>
      </SectionHeading>
      <Img src="/dashboard.png" />
      <ButtonPill type="purple" onClick={() => navigate("/dashboard")}>
        Dashboard
      </ButtonPill>
    </VerticalSection>
  );
}
