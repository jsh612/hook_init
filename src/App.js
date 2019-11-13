import React, { useState, useEffect, useRef } from "react";
import { useNotification } from "./useNotification/useNotification";

const App = () => {
  const triggerNotif = useNotification("어느팀을 좋아합니까?", {
    body: "I like MU"
  });
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <button onClick={triggerNotif}>hello</button>
    </div>
  );
};

export default App;
