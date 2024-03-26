import React from 'react';

const NavBar = () => {
  return (
    <div className="navbar">
      <h2 className="navbar-title">🏀 NBA Database</h2>
      <div className="nav-buttons">
        <button>🏠 Dashboard</button>
        <button>🔍 Search</button>
        <button>ℹ️ About</button>
      </div>
    </div>
  );
};

export default NavBar;
