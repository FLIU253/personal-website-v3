import React from "react";
import { Wrapper, Title, LinkTitle, Description } from "../styles/LinkStyles";

const Link = ({ desc, link = false, title }) => {
  return (
    <Wrapper>
      {link ? (
        <LinkTitle href={link} target="_blank">
          {title}
        </LinkTitle>
      ) : (
        <Title>{title}</Title>
      )}

      <Description>{desc}</Description>
    </Wrapper>
  );
};

export default Link;
