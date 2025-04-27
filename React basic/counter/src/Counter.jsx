import React, { useState } from 'react';

function Counter() {
  let [count, setCount] = useState(0);

  return (
    <div>
      <h5>count: {count}</h5>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count=0)}>Reset</button>
    </div>
  );
}

export default Counter;
