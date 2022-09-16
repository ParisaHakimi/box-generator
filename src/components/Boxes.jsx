import React from "react";
import styles from "../static/boxes.module.css";

const Boxes = ({ boxColorArray }) => {
  return (
    <ul className={styles.container}>
      {boxColorArray.map((color, index) => (
        <li key={index} style={{ backgroundColor: color }}>
          {color}
        </li>
      ))}
    </ul>
  );
};

export default Boxes;
