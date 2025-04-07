import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import GameList from '../components/GameList';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <div className="content">
        <Sidebar />
        <main className="main-content">
          <section className="hero">
            <h1>Welcome to the Game Store</h1>
            <p>Discover amazing games!</p>
          </section>
          <GameList />
        </main>
      </div>
    </div>
  );
}

export default HomePage;