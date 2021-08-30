import { useDispatch } from "react-redux";

import classes from "./Counter.module.css";
import { counterActions } from "../store/store";
import { useAppSelector } from "../hooks";

export const Counter = () => {
  const dispatch = useDispatch();
  const counter = useAppSelector((state) => state.counter.value);
  const isSeen = useAppSelector((state) => state.counter.isSeen);

  const num = 5;

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(num));
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
        <button onClick={increaseHandler}>+{num}</button>
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
