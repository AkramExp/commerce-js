import styled from "styled-components";
import ButtonPill from "../../ui/ButtonPill";

const Card = styled.div`
  display: inline-flex;
  align-items: center;
  width: 100%;
  gap: 3rem;
`;

const CardImg = styled.img`
  width: 46%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const CardText = styled.h1`
  display: flex;
  flex-direction: column;
  white-space: normal;
  margin-bottom: 0rem;
  gap: 1.5rem;
  font-size: 1.5rem;
  font-weight: 500;

  span {
    font-weight: 400;
    font-size: 1.75rem;
  }
`;

export default function SlideCard({ item }) {
  const { title, text, image } = item;

  const src = `public/${image}`;

  return (
    <Card>
      <CardImg src={src} />
      <Row>
        <CardText>
          {title}
          <span>{text}</span>
        </CardText>
        <ButtonPill type="dark">Visit site</ButtonPill>
      </Row>
    </Card>
  );
}
