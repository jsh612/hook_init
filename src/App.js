import React, { useState, useEffect, useRef } from "react";
import { useScroll } from "./useScroll/useScroll";

const App = () => {
  const { y } = useScroll();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 400 ? "red" : "skyblue" }}>
        Hi
      </h1>
    </div>
  );
};

export default App;
