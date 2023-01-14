import React from "react";
import styles from "./LoadingSpinner.module.css";
const LoadingSpinner = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader}>
        <div className={`${styles.square1} ${styles.position}`}></div>
        <div class={`${styles.square2} ${styles.position}`}></div>
        <div class={`${styles.square3} ${styles.position}`}></div>
        <div class={`${styles.square4} ${styles.position}`}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
