import React, { useContext } from "react";
import { countContext } from "../App";

function ComponentA() {
  const countContext = useContext(countContext);
  return (
    <div>
      Component A - {countContext.countState}
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

export default ComponentA;
