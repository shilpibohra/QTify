import React from "react";
import Styles from "./Hero.module.css";
import { ReactComponent as VibratingHeadphone } from "../../assets/vibratingheadphone.svg";

const Hero = () => {
  return (
    <div className={Styles.HeroContainer}>
      <div className={Styles.HeroText}>
        <div>100 Thousand Songs, ad-free</div>
        <div>Over thousands podcast episodes</div>
      </div>
      <VibratingHeadphone />
    </div>
  );
};

export default Hero;