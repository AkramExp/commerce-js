import styled from "styled-components";

export const White = styled.p`
  color: white;
`;

export const Sky = styled.span`
  color: #41c7dc;
`;

export const Blue = styled.span`
  color: #3397ed;
`;

export const Orange = styled.span`
  color: #ef9761;
`;

export const Purple = styled.span`
  color: #7f78c7;
`;

export const Green = styled.span`
  color: #26916e;
`;

export const Comment = styled.span`
  color: var(--grey-2);
`;

export function Dot() {
  return <Sky>.</Sky>;
}

export function OpenBrac() {
  return <Sky>&#40;</Sky>;
}

export function CloseBrac() {
  return <Sky>&#41;</Sky>;
}

export function Apos() {
  return <Green>&apos;</Green>;
}
