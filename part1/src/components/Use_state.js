import { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }
  const handleDecrement = () => {
    setCount(count - 1);
  }

  return (
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement} style={{ padding: "10px 20px", cursor: "pointer" }}>Increment</button>
      <br />
      <button onClick={handleDecrement} style={{ padding: "10px 20px", cursor: "pointer" }}>Decrement</button>
    </div>
  )
}