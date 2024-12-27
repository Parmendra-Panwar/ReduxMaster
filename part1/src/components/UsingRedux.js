import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../Store/Store";

const CounterDisplay = () => {
  const { counterVel } = useSelector((store) => store.counter);
  const dispatchCounter = useDispatch();

  const handleInc = () => {
    dispatchCounter(counterActions.increment());
  };
  const handleDec = () => {
    dispatchCounter(counterActions.decrement());
  };
  return <div className="my-3">
    <center>

      <h1>Count: {counterVel}</h1>
      <button onClick={handleInc} style={{ padding: "10px 20px", cursor: "pointer" }}>Increment</button>
      <br />
      <br />
      <button onClick={handleDec} style={{ padding: "10px 20px", cursor: "pointer" }}>Decrement</button>


    </center>
  </div>;
};

export default CounterDisplay;
