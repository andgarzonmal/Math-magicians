import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="welcome-container">
      <div className="welcome-section">
        <h1 className="home-header">Welcome to our Page!</h1>
        <p className="home-text">
          Math magicians is a website for all fans of mathematics.
          It is a Single Page App (SPA) that allows users to make simple
          calculations and read a random math-related quote.
        </p>
      </div>
    </div>
  );
}
