import { useState } from "react";

export default function NameScreen({ onStart }) {
  const [name, setName] = useState("");

  return (
    <div className="center-box">
      <h1>Online Quiz System</h1>
      <input
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button disabled={!name} onClick={() => onStart(name)}>
        Start Quiz
      </button>
    </div>
  );
}