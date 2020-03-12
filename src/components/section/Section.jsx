import React from "react";
import { Right, Wrapper, Left, Title } from "../styles/SectionStyles";

const Section = ({ children, id, title }) => {
  return (
    <Wrapper id={id}>
      <Left>
        <Title>{title}</Title>
      </Left>
      <Right>{children}</Right>
    </Wrapper>
  );
};

export default Section;
