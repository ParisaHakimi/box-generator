import "./App.css";
import Form from "./components/Form";
import Boxes from "./components/Boxes";
import { useState } from "react";

function App() {
  const [boxColorArray, setBoxColorArray] = useState([]);
  return (
    <div className="App">
      <h1>Box Generator</h1>
      <Form boxColorArray={boxColorArray} setBoxColorArray={setBoxColorArray} />
      <Boxes boxColorArray={boxColorArray} />
    </div>
  );
}
export default App;
