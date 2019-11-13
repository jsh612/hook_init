import React, { useState, useEffect, useRef } from "react";
import { useBeforeLeave } from "./useBeforeLeave/useBeforeLeave";

const App = () => {
  const begForLife = () => console.log("떠나지마~");
  useBeforeLeave(begForLife);
  return (
    <>
      <h1>hello</h1>
      <div className="App"></div>
    </>
  );
};

export default App;
