import React, { useState, useEffect, useRef } from "react";
import { useFullscreen } from "./useFullscrenn/useFullscreen";

const App = () => {
  const onFullS = isFull => {
    console.log(isFull ? "전체 화면" : "일반 화면");
  };
  const { elemnet, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={elemnet}>
        <img
          alt="사진"
          src="http://img.asiatoday.co.kr/file/2017y/07m/06d/20170706000846413_1499299292_1.jpg"
        />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
};

export default App;
