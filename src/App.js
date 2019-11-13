import React, { useState } from "react";
import { useTabs, content } from "./useTabs/useTabs";

const App = () => {
  const { currentContent, changeContent } = useTabs(0, content);
  return (
    <>
      <div className="App">
        {content.map((section, index) => (
          <button onClick={() => changeContent(index)}>{section.tab}</button>
        ))}
      </div>
      <div>{currentContent.content}</div>
    </>
  );
};

export default App;
