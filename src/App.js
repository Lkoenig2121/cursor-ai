import { useState } from "react";
import "./App.css";
import Confetti from "react-confetti";
function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  return (
    <div //
      className="App"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {showConfetti && <Confetti />}
      <h1>Hello World</h1>
      <button
        onClick={() => setShowConfetti(true)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          marginTop: "20px",
          cursor: "pointer",
        }}
      >
        Make it Rain! 🎉
      </button>
    </div>
  );
}

export default App;
