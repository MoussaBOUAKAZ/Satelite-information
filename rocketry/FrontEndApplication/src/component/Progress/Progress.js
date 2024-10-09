import React from "react";
import InteractiveList from "./InteractiveList";
import styles from "../component.module.css";

export default function Progress() {
  return (
    <div className={styles.Progress}>
      <h2 className={styles.title}>Etat Progress</h2>
      <div style={{width:"100%"}}>
        <InteractiveList />
      </div>
    </div>
  );
}
