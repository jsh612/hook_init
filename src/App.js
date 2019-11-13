import React, { useState, useEffect } from "react";

const App = () => {
  const sayHello = () => console.log("hello", num1, num2);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  // useEffect(sayHello, [num1]); // 초기 mount 될때와 num1이 변경 될때만 useEffect 실행
  useEffect(sayHello, []); // 초기 mount 에만 실행
  return (
    <>
      <div className="App">
        <div>Hi</div>
        <button onClick={() => setNum1(num1 + 1)}>{num1}</button>
        <button onClick={() => setNum2(num2 + 1)}>{num2}</button>
      </div>
    </>
  );
};

export default App;
