import React, { useState, useEffect } from "react";
import { useTitle } from "./useTitle/useTitle";

const App = () => {
  const titleUpdator = useTitle("Loading....");
  setTimeout(() => titleUpdator("Home"), 2000);
  return (
    <>
      <div className="App">
        <div>Hi</div>
      </div>
    </>
  );
};

export default App;
