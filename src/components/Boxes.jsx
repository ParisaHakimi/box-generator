import React from "react";
import styles from "../static/boxes.module.css";

const Boxes = ({ colourNameToHex }) => {
  return (
    <ul className={styles.container}>
      <li style={{ backgroundColor: colourNameToHex }}></li>
      {/* <li className={styles.red}></li>
      <li className={styles.blue}></li>
      <li className={styles.purple}></li>
      <li className={styles.green}></li> */}
    </ul>
  );
};

export default Boxes;
