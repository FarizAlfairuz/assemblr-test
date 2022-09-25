import React from "react";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.flex}>
          <img src="chair.svg" alt="chair-logo" className={styles.logo} />
          <h1>WUDO</h1>
        </div>
        <nav className={styles.flex}>
          <div className={styles.navMenu}>
            <div className={styles.btn}>Home</div>
            <div className={styles.btn}>Furniture</div>
            <div className={styles.btn}>Product</div>
            <div className={styles.btn}>Store</div>
          </div>
          <div className={styles.navMenu}>
            <img src="search.svg" alt="search-logo" className={styles.logo} />
            <img src="cart.svg" alt="cart-logo" className={styles.logo} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
