import { useEffect } from "react";
import { useState } from "react";
import "./index.scss";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(Number(localStorage.getItem("count")));
  }, []);

  const save = () => {
    localStorage.setItem("count", `${count}`);
  };

  const increment = () => {
    setCount(count + 1);
    save();
  };

  const decrement = () => {
    setCount(count - 1);
    save();
  };

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={decrement} className="minus">
          - Минус
        </button>
        <button onClick={increment} className="plus">
          Плюс +
        </button>
      </div>
    </div>
  );
}

export default App;
