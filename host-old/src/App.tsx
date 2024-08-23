import React from "react";
import { Routes, Route } from "react-router-dom";
import "./style.css";

const MFE1App = React.lazy(() => import("mfe1/app"));
const MFE2App = React.lazy(() => import("mfe2/app"));

const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <p className="text-2xl">Loading...</p>
    </div>
  );
};

const App = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<MFE1App />} />
        <Route path="/mfe2" element={<MFE2App />} />
      </Routes>
    </React.Suspense>
  );
};

export default App;
