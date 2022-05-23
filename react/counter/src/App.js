import React, { useState } from 'react';
import Counter from './components/counter';


function App(props) {

  const [count, setCount] = useState()

  return (
    <div style={{ textAlign: "center"}}>
      <Counter count={count} setCount={setCount}/>
    </div>
  );
}

export default App;

