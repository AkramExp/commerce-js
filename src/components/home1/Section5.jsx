import styled from "styled-components";
import SectionHeading from "../../ui/SectionHeading";
import ButtonPill from "../../ui/ButtonPill";
import VerticalSection from "../../ui/VerticalSection";
import { useNavigate } from "react-router-dom";

const CardSection = styled.div`
  color: var(-dark-1);
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 760px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const Card = styled.div`
  width: 26%;
  color: var(--dark-1);

  @media screen and (max-width: 760px) {
    width: auto;
    padding: 2rem;
  }

  &::before {
    content: "";
    display: block;
    height: 2.5px;
    background-color: #f1e8ff;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    margin-right: 1rem;
    margin-left: -2rem;
    margin-bottom: 2rem;

    @media screen and (max-width: 760px) {
      margin-right: -2rem;
    }
  }

  &::after {
    content: "";
    display: block;
    height: 2.5px;
    background-color: #f1e8ff;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    margin-right: 0px;
    margin-left: -20px;
    margin-top: 2rem;

    @media screen and (max-width: 760px) {
      margin-right: -2rem;
    }
  }
`;

const CardHeading = styled.h3`
  font-size: 1.4rem;
  font-weight: 500;
`;

const CardText = styled.p`
  line-height: 2rem;
  font-size: 1.1rem;
`;

export default function Section5() {
  const navigate = useNavigate();

  return (
    <VerticalSection>
      <SectionHeading>
        Take your commerce to the edge
        <span>Boundary pushing commerce.</span>
      </SectionHeading>
      <ButtonPill type="purple" onClick={() => navigate("/features")}>
        All features
      </ButtonPill>
      <CardSection>
        <Card>
          <CardHeading>Multi-storefront</CardHeading>
          <CardText>
            Sell and manage across multiple storefronts and frontends, all with
            their own currencies, integrations, and products.
          </CardText>
        </Card>
        <Card>
          <CardHeading>Sell anywhere</CardHeading>
          <CardText>
            Place your products and checkout anywhere your customers are. Any
            website, any device, any CMS, any experience.
          </CardText>
        </Card>
        <Card>
          <CardHeading>Data control</CardHeading>
          <CardText>
            Import product data from any source, push order data out to any
            external system. Full control over your eCommerce data.
          </CardText>
        </Card>
      </CardSection>
    </VerticalSection>
  );
}
