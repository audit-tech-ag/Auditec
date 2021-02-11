import React from "react";
import Login from "../Login/Login";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="container">
      <main className="main">
        <div className="logocontainer">
          <img src="/logo.JPG" className="logo" />
        </div>
        <a className="title">AudiTech</a>
        <a className="subtitle">As audit should be</a>
      </main>
      <Login />
      <footer className="footer">
        <a>© AudiTech 2021</a>
      </footer>
    </div>
  );
}

export default LandingPage;
