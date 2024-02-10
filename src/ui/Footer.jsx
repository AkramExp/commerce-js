import styled from "styled-components";
import FooterList from "./FooterList";

const StyledFooter = styled.footer`
  width: 75%;
  padding: 0 12rem;
  display: flex;
  flex-direction: column;
  color: white;
  background-color: var(--dark-3);

  @media screen and (max-width: 500px) {
    padding-top: 3rem;
  }
`;

const BottomSection = styled.div`
  border-top: 1px solid var(--dark-2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  padding: 4rem 0;

  @media screen and (max-width: 500px) {
    padding: 2rem 0;
  }
`;

const Logo = styled.img`
  width: 15%;

  @media screen and (max-width: 500px) {
    width: 70%;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <FooterList />
      <BottomSection>
        <Logo src="public/logo-white.png" />
      </BottomSection>
    </StyledFooter>
  );
}
