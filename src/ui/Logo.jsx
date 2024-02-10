import styled from "styled-components";

const Img = styled.img`
  height: 1.5rem;
  width: auto;
`;

export default function Logo() {
  return <Img src="/logo.png" />;
}
