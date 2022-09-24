import { useEffect, useRef, useState } from "react";
import "./index.scss";

function App() {
  const count = useRef(0);
  const [countRef, setCountRef] = useState(0);

  useEffect(() => {
    count.current = Number(localStorage.getItem("count"));
    setCountRef(count.current);
  }, []);

  const save = () => {
    localStorage.setItem("count", `${count.current}`);
  };

  const increment = () => {
    count.current = count.current + 1;
    save();
    setCountRef(count.current);
  };

  const decrement = () => {
    count.current = count.current - 1;
    save();
    setCountRef(count.current);
  };

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{countRef}</h1>
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
