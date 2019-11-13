import React, { useState, useEffect, useRef } from "react";
import { useConfirm } from "./useConfirm/useConfirm";

const App = () => {
  const deleteWorld = () => console.log("delete");
  const abort = () => console.log("취소");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <>
      <div className="App">
        <button onClick={confirmDelete}>Delete the world</button>
      </div>
    </>
  );
};

export default App;
