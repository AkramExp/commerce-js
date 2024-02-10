import styled from "styled-components";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import TextArea from "../../ui/TextArea";
import Button from "../../ui/Button";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media screen and (max-width: 500px) {
    width: auto;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
`;

export default function ContactForm() {
  return (
    <Section>
      <Form>
        <FormRow label="Name" left="0%">
          <Input
            type="text"
            name="name"
            id="name"
            required={true}
            placeholder=""
            width="100%"
          />
        </FormRow>
        <FormRow label="Email" left="0%">
          <Input
            type="email"
            name="email"
            id="email"
            required={true}
            placeholder=""
            width="100%"
          />
        </FormRow>
        <FormRow label="Company" left="0%">
          <Input
            type="text"
            name="company"
            id="company"
            placeholder=""
            width="100%"
          />
        </FormRow>
        <FormRow label="Message" left="0%" type="textarea">
          <TextArea
            type="text"
            name="message"
            id="message"
            placeholder=""
            required={true}
            width="100%"
            rows={6}
          />
        </FormRow>
        <Row>
          <Button type="dark">Send message</Button>
        </Row>
      </Form>
    </Section>
  );
}
