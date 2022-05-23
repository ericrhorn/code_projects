import React, { useState } from 'react';


const Counter = (props) => {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(count + 1);
  }

  return (
    <div style={{ textAlign: "center"}}>
        <h1>Counter!</h1>
        <p>count: {count}</p>
        <div style={{paddingTop: 50}}>
            <button onClick={ clickHandler }>Click me!</button>
        </div>
    </div>
  )

}

export default Counter;