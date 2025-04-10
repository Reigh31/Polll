import React, { useState } from 'react';
import PollOption from './PollOption';

const App = () => {
  const [pets, setPets] = useState([
    { option: 'Dog', count: 0 },
    { option: 'Cat', count: 0 },
    { option: 'Rat', count: 0 }
  ]);

  const handleVote = (index) => {
    const updatedPets = [...pets];
    updatedPets[index].count += 1;
    setPets(updatedPets);
  };

  const getLeader = () => {
    const maxVotes = Math.max(...pets.map(pet => pet.count));
    const leaders = pets.filter(pet => pet.count === maxVotes);

    if (maxVotes === 0) return "No votes yet.";
    if (leaders.length > 1) return `It's a tie between: ${leaders.map(l => l.option).join(', ')} (${maxVotes} votes each)`;

    return `${leaders[0].option} is winning with ${leaders[0].count} vote(s)!`;
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Vote for the Best Pet!</h1>
      {pets.map((pet, index) => (
        <PollOption
          key={index}
          label={pet.option}
          count={pet.count}
          onVote={() => handleVote(index)}
        />
      ))}
      <h2 style={{ marginTop: '30px' }}>🐾 {getLeader()}</h2>
    </div>
  );
};

export default App;
