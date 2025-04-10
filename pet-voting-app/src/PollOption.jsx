import React from 'react';

const PollOption = ({ label, count, onVote }) => {
  return (
    <div style={{ margin: '10px' }}>
      <h3>{label}</h3>
      <p>Votes: {count}</p>
      <button onClick={onVote}>Vote for {label}</button>
    </div>
  );
};

export default PollOption;
