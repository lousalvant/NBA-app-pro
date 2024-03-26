import React, { useState } from 'react';
import TeamCard from './components/TeamCard';
import PlayerCard from './components/PlayerCard';
import TopTeamsCard from './components/TopTeamsCard';
import DataList from './components/DataList';
import NavBar from './components/NavBar';
import './App.css';

const App = () => {
  const [selectedTeam, setSelectedTeam] = useState('1'); // Initialize with a default team ID

  const handleChangeTeam = (event) => {
    setSelectedTeam(event.target.value);
  };

  return (
    <div>
      <NavBar handleChangeTeam={handleChangeTeam} />
      <div className="summary-cards-container">
        <TeamCard />
        <PlayerCard />
        <TopTeamsCard />
      </div>
      <div className="data-list-box">
        <DataList selectedTeam={selectedTeam} handleChangeTeam={handleChangeTeam} />
      </div>
    </div>
  );
};

export default App;
