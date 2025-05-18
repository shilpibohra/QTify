import React from "react";
import styles from "./Hero.module.css";
import { ReactComponent as VibratingHeadphone } from "../../assets/vibratingheadphone.svg";

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <div>
          <h1>100 Thousand Songs, ad-free</h1>
          <h1>Over thousands podcast episodes</h1>
        </div>
        <VibratingHeadphone />
      </div>
    </>
  );
};
export default Hero;
