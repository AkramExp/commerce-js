import MainSection from "../../ui/MainSection";
import VerticalRow from "../../ui/VerticalRow";
import MainHeading from "../../ui/MainHeading";
import styled from "styled-components";

const Img = styled.img`
  position: relative;
  right: -4rem;
  width: 100%;

  @media screen and (max-width: 500px) {
    right: 0;
  }
`;

export default function Section1() {
  return (
    <MainSection>
      <VerticalRow>
        <MainHeading type="white">
          Powerful eCommerce on the Jamstack{" "}
          <span>
            Create fast, secure eCommerce applications using JavaScript, APIs,
            and Markup.
          </span>
        </MainHeading>
      </VerticalRow>
      <Img src="public/jamstackfinal__1_.png" />
    </MainSection>
  );
}
