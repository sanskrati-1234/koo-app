import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Post from "./components/Post";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Posts</h1>
      <Post />
    </div>
  );
}

export default App;
