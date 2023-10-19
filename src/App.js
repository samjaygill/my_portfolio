import React from "react";
import "./App.css";
import MainContainer from "./containers/MainContainer.js";

document.body.style.backgroundColor = "#E1DFE1";
document.body.style.fontFamily = "Source Sans";

function App() {
  return (
    <div className="App">
      <MainContainer />
    </div>
  );
}

export default App;
