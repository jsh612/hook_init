import { useRef } from "react";

export const useFullscreen = callback => {
  const elemnet = useRef();
  const runCb = isFull => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (elemnet.current) {
      // console.log(elemnet.current); // img 태그
      elemnet.current.requestFullscreen();
      runCb(true);
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    runCb(false);
  };
  return { elemnet, triggerFull, exitFull };
};
