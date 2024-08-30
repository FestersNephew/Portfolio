import React from 'react';

const Spaceship = () => (
  <g transform="translate(1500, 1500)">
    {/* Spaceship body */}
    <ellipse
      cx="0"
      cy="0"
      rx="400"
      ry="100"
      fill="grey"
      stroke="black"
      strokeWidth="5"
    />
    {/* Details */}
    <circle cx="-150" cy="0" r="30" fill="white" />
    <circle cx="150" cy="0" r="30" fill="white" />
  </g>
);

export default Spaceship;
