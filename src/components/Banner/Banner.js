import React from "react";
import styles from "./styles.module.css";

const Banner = () => {
  return (
    <div className={styles.content}>
      <div className={styles.explore}>
        <h2>Exotic minimal furniture.</h2>
        <p>
          Choose from a wide range of well-creafted premium quality wooden
          furniture online
        </p>
        <button>Explore</button>
      </div>
      <div>3d assets</div>
    </div>
  );
};

export default Banner;
