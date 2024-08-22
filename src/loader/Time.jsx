import React from 'react';

function Time({ time }) {
  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="absolute bottom-2 right-2 bg-black text-white text-sm rounded px-1">
      {formatTime(time)}
    </div>
  );
}

export default Time;
