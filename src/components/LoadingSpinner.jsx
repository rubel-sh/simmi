import React from "react";
import styles from "./LoadingSpinner.module.css";
const LoadingSpinner = ({ className }) => {
  return (
    <div className={`${styles.loaderWrapper} ${className}`}>
      <div className={styles.loader}>
        <div className={`${styles.square1} ${styles.position}`}></div>
        <div className={`${styles.square2} ${styles.position}`}></div>
        <div className={`${styles.square3} ${styles.position}`}></div>
        <div className={`${styles.square4} ${styles.position}`}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
