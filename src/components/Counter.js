import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div style={{marginTop: "3rem"}}>
            <button onClick={()=>setCounter(counter + 1)}>+1</button>
            <button onClick={()=>setCounter(counter + 5)}>+5</button>
            <button onClick={()=>setCounter(counter + 100)}>+100</button>
            <button onClick={()=>setCounter(counter - 100)}>-100</button>
            <button onClick={()=>setCounter(counter - 5)}>-5</button>
            <button onClick={()=>setCounter(counter - 1)}>-1</button>

            <div style={{marginTop: "2rem"}}>Counter currentli is {counter}</div>
        </div>
    );
};

export default Counter;