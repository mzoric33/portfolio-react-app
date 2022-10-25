import React from "react";
import classes from "./Header.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    <header>
      <div className={classes.header__content}>
        <nav className={classes.header__content__nav}>
          <h2 className={classes.header__content__logo}>
            OSOBNI <span className={classes.orange}>PORTFOLIO</span>
          </h2>
          <ul>
            <li>
              <a href="#">NASLOVNICA</a>
            </li>
            <li>
              <a href="#omeni">O MENI</a>
            </li>
            <li>
              <a href="#">PROJEKTI</a>
            </li>
            <li>
              <a href="#">KONTAKT</a>
            </li>
          </ul>
          <div className={classes.header__content__toggle}>
            <BiMenuAltRight />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
