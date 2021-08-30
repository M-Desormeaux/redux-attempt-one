import { useDispatch, useSelector } from "react-redux";

import classes from "./Counter.module.css";
import { counterActions } from "../store/store";

export const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const isSeen = useSelector((state) => state.isSeen);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const resetHandler = () => {
    dispatch(counterActions.reset());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const counterButtons = isSeen && (
    <>
      <div>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{counter}</div>
        <button onClick={decrementHandler}>-1</button>
        <button onClick={incrementHandler}>+1</button>
        <button onClick={increaseHandler}>+2</button>
      </div>
      <div>
        <button onClick={resetHandler}>reset</button>
      </div>
    </>
  );

  return (
    <main className={classes.counter}>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      {counterButtons}
    </main>
  );
};
