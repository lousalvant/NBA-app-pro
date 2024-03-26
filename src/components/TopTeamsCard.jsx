// TopTeamsCard.jsx
import React, { useState, useEffect } from 'react';

const TopTeamsCard = () => {
  const [eastTeam, setEastTeam] = useState(null);
  const [westTeam, setWestTeam] = useState(null);

  useEffect(() => {
    const fetchTopTeams = async () => {
      try {
        // Fetch data for the top team in the East conference
        const eastResponse = await fetch('https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2023&team=2&conference=east', {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '38672978a3mshb0e70ee4a14db29p110155jsnb9b1f54aa483',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
          }
        });
        const eastResult = await eastResponse.json();
        setEastTeam(eastResult.response[0]);

        // Fetch data for the top team in the West conference
        const westResponse = await fetch('https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2023&team=25&conference=west', {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '38672978a3mshb0e70ee4a14db29p110155jsnb9b1f54aa483',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
          }
        });
        const westResult = await westResponse.json();
        setWestTeam(westResult.response[0]);
      } catch (error) {
        console.error('Error fetching top teams:', error);
      }
    };

    fetchTopTeams();
  }, []);

  if (!eastTeam || !westTeam) {
    return <div>Loading...</div>;
  }

  return (
    <div className="summary-card">
      <h2>Top Teams</h2>
      <div className="team-card">
        <h3>{eastTeam.team.name}</h3>
        <p>Conference: {eastTeam.conference.name}</p>
        <p>Wins: {eastTeam.conference.win}</p>
        <p>Losses: {eastTeam.conference.loss}</p>
      </div>
      <div className="team-card">
        <h3>{westTeam.team.name}</h3>
        <p>Conference: {westTeam.conference.name}</p>
        <p>Wins: {westTeam.conference.win}</p>
        <p>Losses: {westTeam.conference.loss}</p>
      </div>
    </div>
  );
};

export default TopTeamsCard;
