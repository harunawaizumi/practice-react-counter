import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  // extract counter from redux state
  const counter = useSelector((state) => state.counter)

  // extract showCounter from redux state
  const showCounter = useSelector((state) => state.showCounter)

  // the redux way to access to dispatch function in react
  const dispatch = useDispatch();

  // send dispatch increment type as action to update state
  const incrementHandler = () => {
    dispatch({ type: 'increment'})
  }
  // send dispatch decrement type as action to update state
  const decrementHandler = () => {
    dispatch({ type: 'decrement'})
  }

  // send dispatch toggle type as action to update state 
  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle'})
  };
  

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>-- { counter } --</div>}
      <button className={classes.countButton} onClick={incrementHandler}>+1</button>
      <button className={classes.countButton} onClick={decrementHandler}>-1</button>
      <button className={classes.countButton} onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter;
