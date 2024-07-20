import React from "react";
import "./Home.scss";

const Home = ({ name }) => {
  return (
    <main>
      <div className="main-card">
        <p className="main-card__title">Hello</p>
        <p className="main-card__name">
          My name is <span className="bold">{name}</span>
        </p>
        <p className="message">Welcome to my page :)</p>
      </div>
    </main>
  );
};

export default Home;
