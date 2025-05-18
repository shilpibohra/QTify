import React, { useState } from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

import ModelNew from "../Model/Model";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <>
      <nav className="navbar">
        <Logo />
        <Search />
        <ModelNew val={open} className="button" onClick={handleClick} />
        {/* <Button text="Give Feedback" type="button" onClick={handleClick} /> */}
      </nav>
    </>
  );
};

export default Navbar;
