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
        <h1>Ryan Fitzgerald</h1>
        <h2>Full-Stack Developer based in Toronto, Canada.</h2>
        <Socials />
      </div>
    </div>
  );
};

export default Header;
