import React from 'react';
import { useParams } from 'react-router-dom';  // Import useParams hook
import PlayerDetail from "../src/components/PlayerDetail"; 

const DetailView = () => {
  const { id } = useParams(); // Access the player ID from the route params

  return (
    <div>
      <PlayerDetail playerId={id} /> {/* Pass the player ID as a prop */}
    </div>
  );
};

export default DetailView;
