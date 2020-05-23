import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ThreadList from "./components/ThreadList/ThreadList";
import ThreadBody from "./components/Thread/ThreadBody";

function App() {
  return (
    <div className="App flex flex-col max-h-screen overflow-hidden">
      <Header />
      <div className="flex flex-grow overflow-auto">
        <div className="">
          <Sidebar />
        </div>
        <main className="flex w-full">
          <ThreadList />
          <ThreadBody />
        </main>
      </div>
    </div>
  );
}

export default App;
