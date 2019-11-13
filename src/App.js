import React, { useState, useEffect, useRef } from "react";
import { usePreventLeave } from "./usePreventLeave/usePreventLeave";

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <>
      <div className="App">
        <button onClick={enablePrevent}>protect</button>
        <button onClick={disablePrevent}>unprotect</button>
      </div>
    </>
  );
};

export default App;
