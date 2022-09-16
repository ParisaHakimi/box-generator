import "./App.css";
import Form from "./components/Form";
import Boxes from "./components/Boxes";
import { useState } from "react";
import FormIntegerColor from "./components/FormIntegerColor";
import Display from "./components/Display";

function App() {
  const [boxColorArray, setBoxColorArray] = useState([]);
  const [integerColorArray, setIntegerColorArray] = useState([]);
  return (
    <div className="App">
      <h1>Box Generator</h1>
      <Form boxColorArray={boxColorArray} setBoxColorArray={setBoxColorArray} />
      <Boxes boxColorArray={boxColorArray} />
      <br />
      <h1>Customize Box Generator</h1>
      <FormIntegerColor
        integerColorArray={integerColorArray}
        setIntegerColorArray={setIntegerColorArray}
      />
      <Display integerColorArray={integerColorArray} />
    </div>
  );
}
export default App;
