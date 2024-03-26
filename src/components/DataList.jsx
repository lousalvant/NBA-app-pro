import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DataList = () => {
  const [players, setPlayers] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('1');
  const [selectedPosition, setSelectedPosition] = useState('');
  const [positions, setPositions] = useState([]);
  
  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const url = `https://api-nba-v1.p.rapidapi.com/players?team=${selectedTeam}&season=2023`;
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '38672978a3mshb0e70ee4a14db29p110155jsnb9b1f54aa483',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
          }
        };
        const response = await fetch(url, options);
        const data = await response.json();
        setPlayers(data.response);
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };

    fetchPlayers();
  }, [selectedTeam]);

  useEffect(() => {
    // Extract unique positions from players data
    if (players) {
      const positions = new Set();
      players.forEach((player) => {
        const pos = player.leagues.standard ? player.leagues.standard.pos : null;
        if (pos) {
          const posArray = pos.split('-');
          posArray.forEach((p) => positions.add(p));
        }
      });
      setPositions(Array.from(positions));
    }
  }, [players]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePositionChange = (event) => {
    setSelectedPosition(event.target.value);
  };

  if (!players) {
    return <div>Loading...</div>;
  }

  const filteredPlayers = players.filter((player) => {
    const fullName = `${player.firstname} ${player.lastname}`;
    const playerPos = player.leagues.standard ? player.leagues.standard.pos : '';
    return (
      fullName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedPosition === '' || playerPos.includes(selectedPosition))
    );
  });

  return (
    <div>
      <div>
        <input type="text" placeholder="Search by name" value={searchTerm} onChange={handleSearch} />
        <select value={selectedTeam} onChange={(e) => setSelectedTeam(e.target.value)}>
          <option value="1">Atlanta Hawks</option>
          <option value="2">Boston Celtics</option>
          <option value="4">Brooklyn Nets</option>
          <option value="5">Charlotte Hornets</option>
          <option value="6">Chicago Bulls</option>
          <option value="7">Cleveland Cavaliers</option>
          <option value="8">Dallas Mavericks</option>
          <option value="9">Denver Nuggets</option>
          <option value="10">Detroit Pistons</option>
          <option value="11">Golden State Warriors</option>
          <option value="14">Houston Rockets</option>
          <option value="15">Indiana Pacers</option>
          <option value="16">LA Clippers</option>
          <option value="17">Los Angeles Lakers</option>
          <option value="19">Memphis Grizzlies</option>
          <option value="20">Miami Heat</option>
          <option value="21">Milwaukee Bucks</option>
          <option value="22">Minnesota Timberwolves</option>
          <option value="23">New Orleans Pelicans</option>
          <option value="24">New York Knicks</option>
          <option value="25">Oklahoma City Thunder</option>
          <option value="26">Orlando Magic</option>
          <option value="27">Philadelphia 76ers</option>
          <option value="28">Phoenix Suns</option>
          <option value="29">Portland Trail Blazers</option>
          <option value="30">Sacramento Kings</option>
          <option value="31">San Antonio Spurs</option>
          <option value="38">Toronto Raptors</option>
          <option value="40">Utah Jazz</option>
          <option value="41">Washington Wizards</option>
        </select>
        <select value={selectedPosition} onChange={handlePositionChange}>
          <option value="">All Positions</option>
          {positions.map((pos, index) => (
            <option key={index} value={pos}>
              {pos}
            </option>
          ))}
        </select>
      </div>
      <ul>
        {filteredPlayers.slice(0, 20).map((player) => (
          <li key={player.id}>
            <Link to={`/player/${player.id}`}>
              <div className="player-info">
                <h3>{`${player.firstname} ${player.lastname}`}</h3>
                <div className="player-details">
                  <p>{`Height: ${player.height.feets}'${player.height.inches}"`}</p>
                  <p>{`Weight: ${player.weight.pounds} lbs`}</p>
                  <p>{`College: ${player.college}`}</p>
                  <p>{`Jersey: ${player.leagues.standard ? player.leagues.standard.jersey : 'N/A'}`}</p>
                  <p>{`Position: ${player.leagues.standard ? player.leagues.standard.pos : 'N/A'}`}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;
