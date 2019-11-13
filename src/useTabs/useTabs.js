import React, { useState } from "react";

export const useTabs = (initTab, content) => {
  const [currentIndex, setCurrentIndex] = useState(initTab);
  if (!content || !Array.isArray(content)) {
    return;
  }
  return {
    currentContent: content[currentIndex],
    changeContent: setCurrentIndex
  };
};

//예시 데이터일분
export const content = [
  {
    tab: "Secton 1",
    content: "Section1 content"
  },
  {
    tab: "Secton 2",
    content: "Section2 content"
  }
];
