import React, { useState, useEffect } from 'react';

export default function Arbol() {
  const [lights, setLights] = useState([]);

  useEffect(() => {
    const generateLights = () => {
      const colors = ['red', 'yellow', 'blue'];
      const newLights = [];
      const totalLights = 50;

      for (let i = 0; i < totalLights; i++) {
        const top = Math.floor(Math.random() * 340);
        let maxWidth = 0;

        if (top < 100) {
          maxWidth = (top / 100) * 160;
        } else if (top < 220) {
          maxWidth = ((top - 100) / 120) * 190 + 80;
        } else {
          maxWidth = ((top - 220) / 120) * 220 + 120;
        }
        const halfWidth = maxWidth / 2;
        const left = Math.floor(Math.random() * (halfWidth * 2)) + (130 - halfWidth);

        newLights.push({
          id: i,
          color: colors[Math.floor(Math.random() * colors.length)],
          top: top + 10,
          left: left,
          delay: Math.random() * 2
        });
      }
      setLights(newLights);
    };

    generateLights();
  }, []);

  return (
    <div className="tree">
      {/* Hojas del árbol */}
      <div className="tri layer-1" />
      <div className="tri layer-2" />
      <div className="tri layer-3" />

      {
        lights.map((light) => (
          <div
            key={light.id}
            className={`light ${light.color}`}
            style={{
              top: `${light.top}px`,
              left: `${light.left}px`,
              animationDelay: `${light.delay}s`,
              width: '8px',
              height: '8px'
            }}
          />))
      }

      <div className="trunk" />
    </div>
  );
}