import React from "react";
import {
  Wrapper,
  Title,
  LinkTitle,
  Description,
  Icons,
  ViewButton,
  GitButton
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
        <Icons>
          <GitButton>
            <i
              class="fab fa-github-square"
              style={{ fontSize: "20px", marginRight: "5px" }}
            ></i>
            Source
          </GitButton>
          <ViewButton>view</ViewButton>
        </Icons>
      ) : null}
    </Wrapper>
  );
};

export default Link;
