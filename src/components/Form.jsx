import { useState } from "react";
import styles from "../static/form.module.css";
import Boxes from "./Boxes";

const Form = ({ colourNameToHex }) => {
  const [colorInput, setColorInput] = useState("");
  const showColor = (e) => {
    e.preventDefault();
    colourNameToHex(colorInput);
    console.log(colourNameToHex(colorInput));
  };
  return (
    <>
      <form className={styles.form} onSubmit={showColor}>
        <label htmlFor="">Color</label>
        <input
          type="text"
          onChange={(e) => setColorInput(e.target.value)}
          value={colorInput}
        />
        <input type="submit" value="Add" />
      </form>
      <Boxes colourNameToHex={colourNameToHex(colorInput)} />
    </>
  );
};

export default Form;
