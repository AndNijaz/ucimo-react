import styled, { css } from "styled-components";

const Heading = styled.p`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 700;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 700;
    `}
    
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 1rem;
      font-weight: 700;
    `}

    ${(props) =>
    props.kurac === "red" &&
    css`
      background-color: red;
    `}
`;

export default Heading;
