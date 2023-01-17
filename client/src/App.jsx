import { useState } from "react";

import "./App.css";
import Field from "./components/field/Field";
import Main from "./layout/main/Main";
import Search from "./layout/serchbar/Search";
import Sidebar from "./layout/sidebar/Sidebar";

function App() {
  return (
    <div className="flex max-[620px]:w-[100vw] gap-12">
      {/* <Sidebar />
      <div className="flex flex-col w-[70%] my-auto">
        <Search />
        <Main />
      </div>
      <button
        class="btn h-12 uppercase inline-block px-6 py-2.5 bg-black text-white hover:text-black focus:text-black font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-white hover:shadow-lg focus:bg-white  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-white active:shadow-lg transition duration-150 ease-in-out flex items-center"
        type="button"
        id="button-addon2"
      >
        publier
      </button> */}
      <Field />
    </div>
  );
}

export default App;
