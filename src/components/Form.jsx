import { useState } from "react";
import styles from "../static/form.module.css";
import Boxes from "./Boxes";

const Form = ({ colourNameToHex }) => {
  const [colorInput, setColorInput] = useState("");
  const showColor = (e) => {
    e.preventDefault();
    if (colorInput !== "") {
      // const addedColor = [...colourNameToHex];
      // console.log(addedColor);
      colourNameToHex(colorInput);
      console.log(colourNameToHex(colorInput));
    }
  };
  return (
    <>
      <form className={styles.form}>
        <label htmlFor="">Color</label>
        <input
          type="text"
          onChange={(e) => setColorInput(e.target.value)}
          value={colorInput}
        />
        <input type="submit" value="Add" onClick={showColor} />
      </form>
      <Boxes colourNameToHex={colourNameToHex(colorInput)} />
    </>
  );
};

export default Form;
