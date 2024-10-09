import React from 'react';
import styles from "../component.module.css";

export default function DisplayField({ label, value }) {
  return (
    <div className={styles.displayFieldContainer}>
      <label className={styles.displayFieldLabel}>{label}</label>
      <div className={styles.displayFieldValue}>{value}</div>
    </div>
  );
}
