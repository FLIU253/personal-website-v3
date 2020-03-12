import React from "react";
import {
  Wrapper,
  Title,
  LinkTitle,
  Description,
  Icon
} from "../styles/LinkStyles";

const Link = ({ desc, link = false, title, project }) => {
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
      {project ? (
        <Icon>
          <i class="fab fa-github-square" style={{ marginRight: "15px" }}></i>
          <i class="fas fa-globe-americas"></i>
        </Icon>
      ) : null}
    </Wrapper>
  );
};

export default Link;
