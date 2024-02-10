import styled from "styled-components";
// import ButtonPill from "../../ui/ButtonPill";
import VerticalRow from "../../ui/VerticalRow";

const Card = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 5rem;

  @media screen and (max-width: 760px) {
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
  }
`;

const CardImg = styled.img`
  width: 40%;

  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

const CardText = styled.h1`
  margin: 0;
  color: var(--dark-1);
  display: flex;
  flex-direction: column;
  white-space: normal;
  gap: 1.5rem;
  font-size: 1.5rem;
  font-weight: 500;

  span {
    font-weight: 400;
    line-height: 2.8rem;
    font-size: 1.7rem;
    color: var(--dark-3);
  }
`;

export default function CarouselCard({ item }) {
  const { title, text, image } = item;

  const src = `public/${image}`;

  return (
    <Card>
      <CardImg src={src} />
      <VerticalRow>
        <CardText>
          {title}
          <span>{text}</span>
        </CardText>
        {/* <ButtonPill type="dark">Visit site</ButtonPill> */}
      </VerticalRow>
    </Card>
  );
}
