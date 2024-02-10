import styled from "styled-components";
import SectionHeading from "../ui/SectionHeading";
import ContactForm from "../components/contact/ContactForm";
import BottomSection from "../ui/BottomSection";

const Section = styled.section`
  width: 100%;
  padding: 8rem 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const Div = styled.div`
  background-color: var(--dark-3);
`;

export default function Contact() {
  return (
    <Section>
      <SectionHeading>
        Contact Us <span>Our team of eCommerce experts are here to help.</span>
      </SectionHeading>
      <ContactForm />
      <Div>
        <BottomSection
          title="Customer-first commerce starts here"
          text="Create the best purchasing experiences."
          buttons={[{ text: "Start free", color: "green" }]}
        />
      </Div>
    </Section>
  );
}
