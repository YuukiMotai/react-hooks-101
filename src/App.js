import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const increment2 = () => setCount(previousCount => previousCount + 1);
  const decrement2 = () => setCount(previousCount => previousCount - 1);

  const reset = () => setCount(0);
  const double = () => setCount(count * 2);
  const devide = () => setCount(count / 2);

  const devide2 = () => setCount(previousCount => {
      if(previousCount % 3 === 0){
        return previousCount /3
      }else{
        return previousCount
      }
  })

  return (
    <React.Fragment>
      <div>
        This is a template for React app.<br />
        count :{count}<br />
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
        <button onClick={double}>✖️2</button>
        <button onClick={devide}>÷2</button>
        <button onClick={devide2}>３の倍数の時だけ３で割る</button>
      </div>
    </React.Fragment>
  );
}

export default App;
