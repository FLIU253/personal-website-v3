import React from "react";

import imgSrc from "../../assets/images/picture.png";
import Socials from "../socials/Socials";

import classes from "./header.module.css";

const Header = () => {
  return (
    <div className={classes.headerWrapper}>
      <div className={classes.profileWrapper}>
        <img
          className={classes.profilePicture}
          src={imgSrc}
          alt="Ryan Fitzgerald"
        />
      </div>
      <div className={classes.profileContent}>
        <h1>Franklin Liu</h1>
        <h2>
          Software Engineering student based in Toronto, Canada, but currently
          going to school at Western University in London, Canada.
        </h2>
        <Socials />
      </div>
    </div>
  );
};

export default Header;
