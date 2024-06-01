import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Freelancer",
          "Real Estate Agent",
          "Farmer",
          "Father",
          "Husband",
          "Mechanic",
          "Artist",
          "Web 3 Developer",
          "Adventure Travel Guide",
          "Ecotourism Specialist",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
