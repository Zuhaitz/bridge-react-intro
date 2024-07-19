import React from "react";

const Home = ({ name }) => {
  return (
    <main>
      <div className="card">
        <p className="title">Hello</p>
        <p className="name">
          My name is <span className="bold">{name}</span>
        </p>
        <p className="message">Welcome to my page :)</p>
      </div>
    </main>
  );
};

export default Home;
