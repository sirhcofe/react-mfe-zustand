import React from "react";
import { Routes, Route } from "react-router-dom";
import "./style.css";

import useSharedStore from "host/useSharedStore";
import useLocalStore from "./utils/store/useLocalStore";

const LocalStore = () => {
  const { number, setNumber } = useLocalStore();
  return (
    <div className="w-[50%] flex justify-between">
      <p className="text-2xl font-bold">local-counter: {number}</p>
      <div className="flex gap-x-2">
        <button
          className="w-8 h-8 rounded-md bg-black text-white"
          onClick={() => setNumber(number - 1)}
        >
          -
        </button>
        <button
          className="w-8 h-8 rounded-md bg-black text-white"
          onClick={() => setNumber(number + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

const GlobalStore = () => {
  const { number, setNumber } = useSharedStore();
  return (
    <div className="w-[50%] flex justify-between">
      <p className="text-2xl font-bold">counter: {number}</p>
      <div className="flex gap-x-2">
        <button
          className="w-8 h-8 rounded-md bg-black text-white"
          onClick={() => setNumber(number - 1)}
        >
          -
        </button>
        <button
          className="w-8 h-8 rounded-md bg-black text-white"
          onClick={() => setNumber(number + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

const Seperator = ({ text }: { text: string }) => {
  return (
    <div className="w-[80%] flex items-center justify-center">
      <span className="grow h-[2px] bg-black" />
      <span className="text-2xl mx-2">{text}</span>
      <span className="grow h-[2px] bg-black" />
    </div>
  );
};

const Mfe = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-y-4">
      <p className="text-3xl font-bold">This is MFE1</p>
      <Seperator text="Global store" />
      <GlobalStore />
      <Seperator text="Local store" />
      <LocalStore />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Mfe />} />
    </Routes>
  );
};

export default App;
