import React, { useState } from 'react';
function State() {
    const [store, current] = useState("");
    return (
      <div>
        <p> {store}</p>
        <button  onClick={() => current(store+"rajat")}>click me
        </button>
      </div>
    );
  }
  export default State;