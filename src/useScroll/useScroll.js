import { useEffect, useState } from "react";

export const useScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });
  const onScroll = () => {
    console.log("y", window.scrollY, "x", window.scrollX); // 스크롤시 y좌표, x좌표 출력
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};
