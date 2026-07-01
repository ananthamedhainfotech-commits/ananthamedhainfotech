import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section style={{ padding: "40px", textAlign: "center", color: "white" }}>
      <h2>Welcome to Niyan IT Solutions 🚀</h2>
      <p>This part is powered by React inside the Niyan IT Solutions template.</p>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          You clicked {count} times
        </button>
      </div>
    </section>
  );
}

export default App;
