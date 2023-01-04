import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Sidebar from "./layout/sidebar/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return <Sidebar />;
}

export default App;
