import React, { useState, useEffect, useRef } from "react";
import useAxios from "./useAxios/useAxios";

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.lt/api/v2/list_movies.json"
  });
  console.log(`loading: ${loading}\n error: ${error}`);
  console.log("data", data);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1>{data && data.status}</h1>
      <h2>{loading ? "로딩중" : "로딩완료"}</h2>
      <button onClick={refetch}>re-fetch</button>
    </div>
  );
};

export default App;
