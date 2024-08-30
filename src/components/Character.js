import React from 'react';

const Character = () => (
  <g transform="translate(1500, 1000)">
    {/* Head - Alien-like */}
    <ellipse
      cx="0"
      cy="0"
      rx="100"
      ry="60"
      fill="url(#alienHeadGradient)"
      stroke="purple"
      strokeWidth="8"
    />

    {/* Eyes - Larger and more alien-like */}
    <ellipse
      cx="-40"
      cy="-20"
      rx="20"
      ry="30"
      fill="white"
    />
    <ellipse
      cx="40"
      cy="-20"
      rx="20"
      ry="30"
      fill="white"
    />
    <circle
      cx="-40"
      cy="-20"
      r="10"
      fill="black"
    />
    <circle
      cx="40"
      cy="-20"
      r="10"
      fill="black"
    />

    {/* Mouth - Zigzag smile */}
    <path
      d="M -50 30 Q 0 50, 50 30 Q 0 70, -50 30 Z"
      stroke="black"
      strokeWidth="4"
      fill="transparent"
    />

    {/* Antennae */}
    <line
      x1="-60"
      y1="-50"
      x2="-100"
      y2="-120"
      stroke="purple"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <circle
      cx="-100"
      cy="-120"
      r="10"
      fill="purple"
    />
    <line
      x1="60"
      y1="-50"
      x2="100"
      y2="-120"
      stroke="purple"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <circle
      cx="100"
      cy="-120"
      r="10"
      fill="purple"
    />

    {/* Body - Trippy Alien Design */}
    <path
      d="M -60 80 Q -120 200, 0 300 Q 120 200, 60 80 Z"
      fill="url(#alienBodyGradient)"
      stroke="purple"
      strokeWidth="4"
    />
    <circle
      cx="0"
      cy="240"
      r="40"
      fill="rgba(255, 0, 255, 0.6)"
      stroke="purple"
      strokeWidth="4"
    />
    <circle
      cx="-30"
      cy="200"
      r="20"
      fill="rgba(0, 255, 255, 0.6)"
      stroke="purple"
      strokeWidth="4"
    />
    <circle
      cx="30"
      cy="200"
      r="20"
      fill="rgba(0, 255, 255, 0.6)"
      stroke="purple"
      strokeWidth="4"
    />

    {/* Arms */}
    <line
      x1="-80"
      y1="120"
      x2="-140"
      y2="280"
      stroke="purple"
      strokeWidth="16"
      strokeLinecap="round"
    />
    <line
      x1="80"
      y1="120"
      x2="140"
      y2="280"
      stroke="purple"
      strokeWidth="16"
      strokeLinecap="round"
    />

    {/* Legs - Tentacle-like */}
    <path
      d="M -40 340 Q -60 400, -20 440 Q 0 460, -40 480"
      stroke="purple"
      strokeWidth="16"
      fill="transparent"
    />
    <path
      d="M 40 340 Q 60 400, 20 440 Q 0 460, 40 480"
      stroke="purple"
      strokeWidth="16"
      fill="transparent"
    />

    {/* Gradients */}
    <defs>
      <linearGradient id="alienBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'limegreen', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'darkgreen', stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="alienHeadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'cyan', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'blue', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
  </g>
);

export default Character;
