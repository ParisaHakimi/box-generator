import { useState } from "react";
import styles from "../static/form.module.css";

const Form = ({ boxColorArray, setBoxColorArray }) => {
  const [colorInput, setColorInput] = useState("");
  const showColor = (e) => {
    e.preventDefault();
    setBoxColorArray([...boxColorArray, colorInput]);
  };
  return (
    <form className={styles.form} onSubmit={showColor}>
      <label htmlFor="">Color</label>
      <input
        type="text"
        onChange={(e) => setColorInput(e.target.value)}
        value={colorInput}
      />
      <input type="submit" value="Add" />
    </form>
  );
};
export default Form;
