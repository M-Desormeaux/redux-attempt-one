import { useDispatch, useSelector } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const isSeen = useSelector((state) => state.isSeen);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const increaseHandler = () => {
    dispatch({ type: "increase", value: 2 });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const resetHandler = () => {
    dispatch({ type: "reset" });
  };
  const toggleCounterHandler = () => {
    dispatch({ type: "toggleView" });
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

export default Counter;
