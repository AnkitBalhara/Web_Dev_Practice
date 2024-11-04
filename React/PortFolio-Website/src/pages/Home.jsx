import React from 'react';
import "../styles/Home.css"

const Home = () => {
  return (
    <section className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>I'm a Web Developer specialized in React and Node.js.</p>
      <button><a href="/projects">View My Work</a></button>
    </section>
  );
};

export default Home;
