import { useState } from "react";
import "./App.css";
import PureCounter from "./components/PureCounter";
import RegularCounter from "./components/RegularCounter";
function App() {
  return (
    <>
      <RegularCounter />
      <PureCounter />
    </>
  );
}

export default App;
