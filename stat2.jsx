import React, { useState } from 'react';
function Statee() {
    const [x,y] = useState(0);
    const [a,b] = useState(0);
    const [button,setButton] = useState("");
    return (
  
      <div>
        <input type="number" value={x} onChange={(e)=>y(parseInt(e.target.value))}/>
        <input type="number" value={a} onChange={(e)=>b(parseInt(e.target.value))}/>
        <p>
            <button onClick={()=>setButton(x+a)}>Add</button>
            <button onClick={()=>setButton(x-a)}>subtract</button>
            <button onClick={()=>setButton(x*a)} >multiply</button>
            <button  onClick={()=>setButton(x/a)}>divide</button>
        </p>
        <p>
            <h1>{button}</h1>
        </p>
      </div>
    );
  }
  export default Statee;