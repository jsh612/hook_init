import React, { useState } from "react";

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      // validator 는 해당 value가 정해진 조건에 맞는지를 검사한다.!
      willUpdate = validator(value);
      // console.log("유효한가", willUpdate); // true or false
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};
