import styled from "styled-components";

const Text = styled.p`
  margin: 0;
  font-size: 1.1rem;
  color: var(--dark-1);
  line-height: 1.7rem;

  span {
    font-weight: 500;
  }

  a {
    font-weight: 500;
    color: var(--blue-1);
    text-decoration: underline;
  }
`;

export default Text;
