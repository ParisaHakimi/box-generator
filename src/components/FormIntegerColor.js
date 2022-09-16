import { useState } from "react";
import styles from "../static/form.module.css";

const FormIntegerColor = ({ integerColorArray, setIntegerColorArray }) => {
  const [color, setColor] = useState("");
  const [size, setSize] = useState(150);
  const submitHandler = (e) => {
    e.preventDefault();
    setIntegerColorArray([
      ...integerColorArray,
      { color: color, size: size + "px" },
    ]);
  };
  return (
    <form className={styles.form2} onSubmit={submitHandler}>
      <label>Color: </label>
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <label>Width and Height in pixels: </label>
      <input
        type="text"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default FormIntegerColor;
