import React, { useState, useEffect } from "react";

export const useTitle = initTtile => {
  const [title, setTitle] = useState(initTtile);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title"); // html head의 title태그 선택
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
