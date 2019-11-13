export const usePreventLeave = () => {
  // 창을 닫을때 닫을껀지 확인 띄우기
  const listener = event => {
    event.preventDefault();
    event.returnValue = false;
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};
