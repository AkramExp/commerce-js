import styled from "styled-components";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Section = styled.section`
  text-align: center;
  padding: 5rem 0;

  h1 {
    margin-top: 0;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export default function BottomSection({ title, text, buttons }) {
  const navigate = useNavigate();

  return (
    <Section>
      <SectionHeading type="white">
        {title} {text && <span>{text}</span>}
      </SectionHeading>
      {buttons && (
        <ButtonGroup>
          {buttons.map((button) => {
            return (
              <Button
                type={button.color}
                key={button}
                onClick={() => {
                  button.to && navigate(button.to);
                }}
              >
                {button.text}
              </Button>
            );
          })}
        </ButtonGroup>
      )}
    </Section>
  );
}
