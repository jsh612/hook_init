import React, { useState, useEffect, useRef } from "react";
import { useClick } from "./useClick/useClick";

const App = () => {
  const sayHello = () => console.log("안녕");
  const title = useClick(sayHello);
  return (
    <>
      <div className="App">
        <h1 ref={title}>Hi</h1>
      </div>
    </>
  );
};

export default App;
