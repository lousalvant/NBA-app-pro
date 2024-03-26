import React, { useState, useEffect } from 'react';

const SummaryCard = () => {
  const [teamData, setTeamData] = useState(null);
  const [statistics, setStatistics] = useState(null);

  // Function to generate a random team ID from the given list
  const getRandomTeamId = () => {
    const teamIds = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 38, 40, 41];
    return teamIds[Math.floor(Math.random() * teamIds.length)];
  };

  useEffect(() => {
    const fetchTeamData = async () => {
      const randomTeamId = getRandomTeamId();

      try {
        const teamResponse = await fetch(`https://api-nba-v1.p.rapidapi.com/teams?id=${randomTeamId}&league=standard`, {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '38672978a3mshb0e70ee4a14db29p110155jsnb9b1f54aa483',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
          }
        });
        const teamResult = await teamResponse.json();
        setTeamData(teamResult.response[0]);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    const fetchTeamStatistics = async () => {
      const randomTeamId = getRandomTeamId();

      try {
        const statsResponse = await fetch(`https://api-nba-v1.p.rapidapi.com/teams/statistics?id=${randomTeamId}&season=2023`, {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '38672978a3mshb0e70ee4a14db29p110155jsnb9b1f54aa483',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
          }
        });
        const statsResult = await statsResponse.json();
        setStatistics(statsResult.response[0]);
      } catch (error) {
        console.error('Error fetching team statistics:', error);
      }
    };

    fetchTeamData();
    fetchTeamStatistics();
  }, []);

  if (!teamData || !statistics) {
    return <div>Loading...</div>;
  }

  return (
    <div className="summary-card">
      <img src={teamData.logo} alt={teamData.name} style={{ width: '100px', height: '100px' }} />
      <h2>{teamData.name}</h2>
      <p>Points: {statistics.points}</p>
      <p>Assists: {statistics.assists}</p>
      <p>Steals: {statistics.steals}</p>
      <p>Blocks: {statistics.blocks}</p>
    </div>
  );
};

export default SummaryCard;
