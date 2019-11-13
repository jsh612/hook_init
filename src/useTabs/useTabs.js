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
