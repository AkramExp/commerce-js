import styled from "styled-components";

const CodeBlockDiv = styled.div`
  height: 18rem;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  font-family: "Source Code Pro", monospace;
  line-height: 1.5rem;

  @media screen and (max-width: 500px) {
    height: auto;
    width: auto;
  }

  background: linear-gradient(
        90deg,
        var(--dot-bg) calc(var(--dot-space) - var(--dot-size)),
        transparent 1%
      )
      center / var(--dot-space) var(--dot-space),
    linear-gradient(
        var(--dot-bg) calc(var(--dot-space) - var(--dot-size)),
        transparent 1%
      )
      center / var(--dot-space) var(--dot-space),
    var(--dot-color);
`;

export default CodeBlockDiv;
