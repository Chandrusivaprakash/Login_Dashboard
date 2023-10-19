import React from "react";
import "./Dashboard.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  let storedData = localStorage.getItem("data");
  useEffect(() => {
    // var storedData = localStorage.getItem('data');

    if (storedData === null || storedData === "") {
      navigate("/login");
    }
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Welcome to the Dashboard {storedData}</h2>
      <div className="widgets-container">
        <div className="widget">
          <h3>Widget 1</h3>
        </div>
        <div className="widget">
          <h3>Widget 2</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
