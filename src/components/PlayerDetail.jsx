import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PlayerDetail = () => {
  const { id, selectedTeam } = useParams();
  const [player, setPlayer] = useState(null);
  // const [selectedTeam, setSelectedTeam] = useState('1'); // Initialize with a default team ID

  useEffect(() => {
    console.log('Selected Team:', selectedTeam); // Log selectedTeam prop
    console.log('Player ID:', id); // Log player ID
    
    const fetchPlayer = async () => {
      try {
        const url = `https://api-nba-v1.p.rapidapi.com/players?id=${id}&team=${selectedTeam}&season=2023`;
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '38672978a3mshb0e70ee4a14db29p110155jsnb9b1f54aa483',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
          }
        };
        const response = await fetch(url, options);
        const data = await response.json();
        setPlayer(data.response[0]); // Since response is an array, access the first (and only) element
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };

    fetchPlayer();
  }, [id, selectedTeam]); // Include selectedTeam in the dependency array

  if (!player) {
    return <div>Loading...</div>;
  }

  return (
    <div className="player-detail-box">
      <h2>{`${player.firstname} ${player.lastname}`}</h2>
      <div>
      <p>{`Height: ${player.height.feets}'${player.height.inches}"`}</p>
      <p>{`Weight: ${player.weight.pounds} lbs`}</p>
      <p>{`College: ${player.college}`}</p>
      <p>{`Jersey: ${player.leagues.standard ? player.leagues.standard.jersey : 'N/A'}`}</p>
      <p>{`Position: ${player.leagues.standard ? player.leagues.standard.pos : 'N/A'}`}</p>
      <p>{`Birth Date: ${player.birth.date}`}</p>
      <p>{`Birth Country: ${player.birth.country}`}</p>
      <p>{`NBA Start: ${player.nba.start}`}</p>
      <p>{`Years Pro: ${player.nba.pro}`}</p>
      <p>{`Height in Meters: ${player.height.meters}`}</p>
      <p>{`Weight in Kilograms: ${player.weight.kilograms}`}</p>
      <p>{`Affiliation: ${player.affiliation}`}</p>
      </div>
    </div>
  );
};

export default PlayerDetail;
