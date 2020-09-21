import React from "react";

// import Header from "./components/Shared/Header/Header";
// import Footer from "./components/Shared/Footer/Footer";
import TaskManager from "./components/TaskManager/TaskManager";
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
      </div>

      <div className="row">
        <div className="col">
          <TaskManager />
        </div>
      </div>

      <div className="row">
        <div className="col"></div>
      </div>
    </div>
  );
}

export default App;
