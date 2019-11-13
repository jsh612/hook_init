import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const potato = useRef(); // <input> 에 접근가능.
  setTimeout(() => console.log(potato.current), 2000); // 출력값: <input placeholder="la">
  setTimeout(() => potato.current.focus(), 3000);
  return (
    <>
      <div className="App">
        <div>Hi</div>
        <input ref={potato} placeholder="la" />
      </div>
    </>
  );
};

export default App;
