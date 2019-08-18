import React from "react";
import "./App.css";
import firebase from "./firebase.js";
import artPage from "./artPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Sunday Art </h1>
      </header>
      <artPage />
    </div>
  );
}

export default App;
