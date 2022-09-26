import React from "react";
import styles from "./styles.module.css";

const Featured = () => {
  return (
    <div className={styles.featured}>
      <h3>FEATURED</h3>
      <dl className={styles.flex}>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
        <li className={styles.item}></li>
      </dl>
    </div>
  );
};

export default Featured;
