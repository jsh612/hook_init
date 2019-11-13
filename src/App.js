import React, { useState, useEffect, useRef } from "react";
import { useNetwork } from "./useNetwork/useNetwork";

const App = () => {
  const handleNetworkChange = online => {
    console.log(online ? "현재 온라인" : "현재 오프라인");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <>
      <div className="App">
        <h1>{onLine ? "Online" : "Offline"}</h1>
      </div>
    </>
  );
};

export default App;
