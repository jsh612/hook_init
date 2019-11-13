import React, { useState } from "react";
import { useTabs } from "./useTabs/useTabs";

const content = [
  {
    tab: "Secton 1",
    content: "Section1 content"
  },
  {
    tab: "Secton 2",
    content: "Section2 content"
  }
];

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
