"use client"
import './_tab.scss';
import React, { useState } from "react";
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";
 
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  return (
    <div className="tabs">
      <h3>Ponuda proizvoda</h3>
      <div className="row">
        <div
          className={`tabButton ${activeTab === "tab1" ? "active" : ""}`}
          onClick={handleTab1}
        >
          Kozmetika
        </div>
        <div
          className={`tabButton ${activeTab === "tab2" ? "active" : ""}`}
          onClick={handleTab2}
        >
          Čaj
        </div>
      </div>
      <div className="outlet">
        {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
      </div>
    </div>
  );
};
export default Tabs;