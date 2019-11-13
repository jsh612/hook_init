import { useEffect } from "react";

export const useBeforeLeave = onBefore => {
  const handle = event => {
    // console.log(event.clientY); // 마우스커서의 y값 좌표
    const { clientY } = event;
    if (clientY < 0) {
      onBefore();
    }
  };
  useEffect(() => {
    // console.log(document); // documnet 전체
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
  if (typeof onBefore !== "function") {
    return;
  }
};
