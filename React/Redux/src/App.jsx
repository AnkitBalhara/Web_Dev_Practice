import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, multiply } from "./redux/counter/createSlice";

function App() {
  const count = useSelector((state) => state.counter.value); // Use "counter" as the key

  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(decrement())}>-</button>
      <div>Jai Shree Ram</div>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(multiply())}>*</button>
    </>
  );
}

export default App;
