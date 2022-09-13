import React from "react";
import styles from "../static/boxes.module.css";

const Boxes = ({ colourNameToHex }) => {
  return (
    <ul className={styles.container}>
      <li style={{ backgroundColor: colourNameToHex }}>{colourNameToHex}</li>
    </ul>
  );
};

export default Boxes;
