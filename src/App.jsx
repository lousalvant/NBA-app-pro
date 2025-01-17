import React, { useState } from 'react';
import TeamCard from './components/TeamCard';
import PlayerCard from './components/PlayerCard';
import TopTeamsCard from './components/TopTeamsCard';
import DataList from './components/DataList';
import PlayerDetail from './components/PlayerDetail'; // Import PlayerDetail component
import NavBar from './components/NavBar';
import TeamStatsChart from './components/TeamStatsChart'; // Import TeamStatsChart component
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
      <div >
      <TeamStatsChart />
      </div>
      <div className="data-list-box">
        <DataList selectedTeam={selectedTeam} setSelectedTeam={setSelectedTeam} />
      </div>
    </div>
  );
};

export default App;
