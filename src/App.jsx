import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import CompareArea from "./components/CompareArea";
import "./styles/main.css";

export default function App() {
  const [source, setSource] = useState("");
  const [target, setTarget] = useState("");

  return (
    <div className="app">
      <Sidebar />
      <Topbar />
      <div className="main-content">
        <Header />
        <CompareArea
          source={source}
          setSource={setSource}
          target={target}
          setTarget={setTarget}
        />
      </div>
    </div>
  );
}