import React from "react";
import "./App.css";
import Log from "./login/Log";

function App() {
  return (
    // <div
    //   className="App"
    //   style={{
    //     position: "absolute",
    //     width: "100%",
    //     height: "100%",
    //     backgroundColor: "#1E1E2E",
    //   }}
    // >
    //   <Log></Log>
    // </div>

    <div style={{ position: "absolute", width: "100%", height: "100%" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflowY: "auto",
          backgroundColor: "#1E1E2E",
        }}
      >
        <Log></Log>
      </div>
    </div>
  );
}

export default App;
