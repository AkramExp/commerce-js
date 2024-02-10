import styled, { css } from "styled-components";

const Row = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: ${(props) => props.left};
  transform: translateY(-50%);
  color: var(--dark-4);
  transition: all 0.2s;

  ${(props) =>
    props.type === "textarea" &&
    css`
      top: 15%;
    `}
  & span {
    color: var(--grey-2);
  }
`;

export default function FormRow({ children, label, error, left, type }) {
  return (
    <Row>
      {children}
      {label && (
        <Label for={children.props.id} left={left} type={type}>
          {label} {children.props.required && <span>(required)</span>}
        </Label>
      )}
    </Row>
  );
}
