import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

const TeamStatsChart = () => {
  const [teamStats, setTeamStats] = useState([]);

  useEffect(() => {
    const fetchTeamStatistics = async () => {
      const teamIds = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 38, 40, 41];
      const season = '2023';
      const promises = teamIds.map(async (teamId) => {
        const url = `https://api-nba-v1.p.rapidapi.com/teams/statistics?id=${teamId}&season=${season}`;
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '38672978a3mshb0e70ee4a14db29p110155jsnb9b1f54aa483',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
          }
        };
        try {
          const response = await fetch(url, options);
          const data = await response.json();
          return {
            teamId,
            points: data.response[0].points,
            assists: data.response[0].assists,
            totReb: data.response[0].totReb
          };
        } catch (error) {
          console.error('Error fetching team statistics:', error);
          return null;
        }
      });
      const teamStatistics = await Promise.all(promises);
      setTeamStats(teamStatistics.filter((stats) => stats !== null));
    };

    fetchTeamStatistics();
  }, []);

  useEffect(() => {
    // Render chart using Chart.js
    if (teamStats.length > 0) {
      const ctx = document.getElementById('teamStatsChart').getContext('2d');
      const labels = teamStats.map((stats) => `Team ${stats.teamId}`);
      const pointsData = teamStats.map((stats) => stats.points);
      const assistsData = teamStats.map((stats) => stats.assists);
      const totRebData = teamStats.map((stats) => stats.totReb);

      new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: [
            {
              label: 'Points',
              data: pointsData,
              borderColor: 'rgb(255, 99, 132)',
              tension: 0.1
            },
            {
              label: 'Assists',
              data: assistsData,
              borderColor: 'rgb(54, 162, 235)',
              tension: 0.1
            },
            {
              label: 'Total Rebounds',
              data: totRebData,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }, [teamStats]);

  return (
    <div className="chart-container">
      <canvas id="teamStatsChart"></canvas>
    </div>
  )
};

export default TeamStatsChart;
