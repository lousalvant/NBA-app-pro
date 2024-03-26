import React, { useState, useEffect } from 'react';

const PlayerCard = () => {
  const [playerData, setPlayerData] = useState(null);

  // Function to generate a random team ID from the given list
  const getRandomTeamId = () => {
    const teamIds = [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 37, 39, 40];
    return teamIds[Math.floor(Math.random() * teamIds.length)];
  };

  useEffect(() => {
    const fetchPlayerData = async () => {
      const randomTeamId = getRandomTeamId();

      try {
        const playerResponse = await fetch(`https://api-nba-v1.p.rapidapi.com/players/statistics?team=${randomTeamId}&season=2023`, {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '38672978a3mshb0e70ee4a14db29p110155jsnb9b1f54aa483',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
          }
        });
        const playerResult = await playerResponse.json();
        const randomPlayerIndex = Math.floor(Math.random() * playerResult.results);
        console.log('Player Data:', playerResult.response[randomPlayerIndex]); // Log player data after defining randomPlayerIndex
        const selectedPlayer = playerResult.response[randomPlayerIndex]; // Access player if available
        setPlayerData(selectedPlayer);
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };

    fetchPlayerData();
  }, []);

  if (!playerData) {
    return <div>Loading...</div>;
  }

  const { player, team, pos, min, fgp, plusMinus } = playerData;
  const { firstname, lastname } = player;

  return (
    <div className="summary-card">
      <h2>{`${firstname} ${lastname}`}</h2>
      <p>Team: {team ? team.name : 'N/A'}</p>
      <p>Position: {pos || 'N/A'}</p>
      <p>Minutes: {min || 'N/A'}</p>
      <p>Field Goal Percentage: {fgp || 'N/A'}</p>
      <p>Plus/Minus: {plusMinus || 'N/A'}</p>
    </div>
  );
};

export default PlayerCard;
