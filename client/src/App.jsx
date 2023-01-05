import { useState } from "react";

import "./App.css";
import Main from "./layout/main/Main";
import Search from "./layout/serchbar/Search";
import Sidebar from "./layout/sidebar/Sidebar";

function App() {
  return (
    <div className="flex gap-12">
      <Sidebar />
      <div className="flex flex-col w-[70%] my-auto">
        <Search />
        <Main />
      </div>
    </div>
  );
}

export default App;
