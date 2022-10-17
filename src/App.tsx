import React from "react";
import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import UserInputs from "./components/UserInputs";
import SubmitBtn from "./components/SubmitBtn";

function App() {
  const [btnNum, setbtnNum] = useState("");
  const [btnNumTwo, setbtnNumTwo] = useState("");

  const upDateBtnOne = () => {};

  return (
    <div className="App">
      <UserInputs />
      <UserInputs />
      <SubmitBtn />
    </div>
  );
}

export default App;
