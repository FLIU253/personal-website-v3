import React from "react";
import imgSrc from "../../assets/images/picture.jpg";
import Socials from "../socials/Socials";
import {
  ProfileWrapper,
  ProfilePicture,
  ProfileContent,
  HeaderWrapper
} from "../styles/HeaderStyles";

const Header = ({ isDarkTheme, toggleTheme }) => {
  return (
    <HeaderWrapper>
      <ProfileWrapper>
        <ProfilePicture src={imgSrc} alt="Ryan Fitzgerald" />
      </ProfileWrapper>
      <ProfileContent>
        <h1>Franklin Liu</h1>
        <h2>
          Software Engineering student based in Toronto, Canada, but currently
          going to school at Western University in London, Canada.
        </h2>
        <Socials isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      </ProfileContent>
    </HeaderWrapper>
  );
};

export default Header;
