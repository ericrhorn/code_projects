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

// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Counter />
//     </div>
//   );
// }

// function Counter() {
//   const [count, setCount] = React.useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }

// export default App;