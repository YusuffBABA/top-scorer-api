import React from 'react';

const TopScorers = ({ topScorers }) => {
  if (!topScorers || topScorers.length === 0) {
    return <p>No top scorers available.</p>;
  }
  return (
    <div>
      <h2>2020-2021 Sezonu Premier Lig Gol Kralları</h2>
      topScorers ?
      {topScorers.map((player) => (
        <p key={player.player.id}>{player.player.name}</p>
      ))}
    </div>
  );
};

export default TopScorers;
