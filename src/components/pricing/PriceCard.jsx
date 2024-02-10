import styled, { css } from "styled-components";
import { FaSquare, FaStar, FaCircle } from "react-icons/fa";
import { BsTriangleFill } from "react-icons/bs";
import { formatCurrency } from "../../helpers";
import { FaCheck } from "react-icons/fa6";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid var(--light-blue-1);
  height: 40rem;

  &:last-child {
    border: none;
  }

  @media screen and (max-width: 500px) {
    border: none;
    height: auto;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  & div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

const Title = styled.span`
  color: var(--dark-1);
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
`;

const Price = styled.span`
  font-size: 20px;
  color: var(--dark-1);

  & span {
    text-transform: uppercase;
    color: var(--dark-2);
    font-size: 10px;
    letter-spacing: 1px;
    font-weight: 500;
  }
`;

const Icon = styled.div`
  border-radius: 50%;
  padding: 1rem;

  & svg {
    width: 2rem;
    height: 2rem;
  }

  ${(props) =>
    props.type === "star" &&
    css`
      background-color: var(--pink-1);

      & svg {
        color: var(--green-3);
      }
    `}
  ${(props) =>
    props.type === "square" &&
    css`
      background-color: var(--red-2);

      & svg {
        color: var(--red-1);
      }
    `}
  ${(props) =>
    props.type === "circle" &&
    css`
      background-color: var(--light-blue-6);

      & svg {
        color: var(--blue-4);
      }
    `}
  ${(props) =>
    props.type === "triangle" &&
    css`
      background-color: var(--orange-2);

      & svg {
        color: var(--orange-1);
      }
    `}
`;

const Rows = styled.ul`
  padding: 0;
  list-style: none;
  padding: 0 2rem;
`;

const Row = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--dark-2);
  border-top: 1px solid var(--light-blue-4);
  padding: 0.7rem 0;
  font-size: 15px;

  & svg {
    height: 13px;
    width: 13px;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;

  & button {
    width: 80%;
  }
`;

export default function PriceCard({ item }) {
  const navigate = useNavigate();
  const { icon, title, price, rows, button } = item;

  return (
    <Card>
      <div>
        <Header>
          {icon === "star" && (
            <Icon type="star">
              <FaStar />
            </Icon>
          )}
          {icon === "square" && (
            <Icon type="square">
              <FaSquare />
            </Icon>
          )}
          {icon === "circle" && (
            <Icon type="circle">
              {" "}
              <FaCircle />
            </Icon>
          )}
          {icon === "triangle" && (
            <Icon type="triangle">
              <BsTriangleFill />
            </Icon>
          )}

          <div>
            <Title>{title}</Title>
            <Price>
              {price !== "Free" ? formatCurrency(price) : "Free"}
              <span>{price !== "Free" && " / Month"}</span>
            </Price>
          </div>
        </Header>
        <Rows>
          {rows.map((row) => (
            <Row key={row}>
              <FaCheck /> {row}
            </Row>
          ))}
        </Rows>
      </div>
      <ButtonDiv>
        <Button type={button} onClick={() => navigate("/signup")}>
          {button === "white2" ? "Start free" : "Get started"}
        </Button>
      </ButtonDiv>
    </Card>
  );
}
