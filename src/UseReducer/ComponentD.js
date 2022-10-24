import React, { useContext } from "react";
import { countContext } from "../App";

function ComponentD() {
  const countContext = useContext(countContext);
  return (
    <div>
      Component D - {countContext.countState}
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default ComponentD;
