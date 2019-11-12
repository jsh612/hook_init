import React, { useState } from "react";
import { useInput } from "./useInput/useInput";

const App = () => {
  const maxLen = value => value.length < 10;
  const name = useInput("Mr. ", maxLen);
  console.log({ ...name });
  return (
    <>
      <div className="App">
        <h1>hello</h1>
      </div>
      {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
      <input placeholder="Name" {...name} />
    </>
  );
};

export default App;
