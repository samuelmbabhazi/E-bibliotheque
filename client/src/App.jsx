import { useState } from "react";

import "./App.css";
import Main from "./layout/main/Main";
import Sidebar from "./layout/sidebar/Sidebar";

function App() {
  return (
    <div className="flex gap-12">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
