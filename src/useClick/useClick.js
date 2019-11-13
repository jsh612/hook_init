import { useEffect, useRef } from "react";

export const useClick = onClick => {
  const element = useRef();
  useEffect(() => {
    if (typeof onClick !== "function") {
      return;
    }
    if (element.current) {
      //componentDidMount, componentDidUpdate 때 호출 가능하나
      // 조건에 [] 빈배열이 주어졌으므로 componentDidMount 때만 실행
      element.current.addEventListener("click", onClick);
    }
    // If your effect returns a function, React will run it when it is time to clean up
    return () => {
      // componentWillUnmount 때 호출
      if (element.current)
        element.current.removeEventListener("click", onClick);
    };
  }, []);
  return element;
};
