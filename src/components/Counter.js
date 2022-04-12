import classes from './Counter.module.css';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const toggleIncrementHandler = () => {
    const newCount = count + 1;
    setCount(newCount)
  };

  const toggleDecrementHandler = () => {
    const newCount = count - 1;
    setCount(newCount)
  };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- { count } --</div>
      <button className={classes.countButton} onClick={toggleIncrementHandler}>+1</button>
      <button className={classes.countButton} onClick={toggleDecrementHandler}>-1</button>
    </main>
  );
};

export default Counter;
