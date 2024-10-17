import React, { useMemo } from "react";

const directions = [
  "East",
  "East-northeast",
  "Northeast",
  "North-northeast",
  "North",
  "North-northwest",
  "Northwest",
  "West-northwest",
  "West",
  "West-southwest",
  "Southwest",
  "South-southwest",
  "South",
  "South-southeast",
  "Southeast",
  "East-southeast"
];

const getDirectionIndex = (angle) => Math.round(angle / (Math.PI / 8)) % 16;

export function Hint({ start, locations, name, color }) {
  if (!locations.length) return <div style={{ color: color }}><p>No one has ever met {name} in this world</p></div>;

  const nearestLocations = useMemo(() => {
    const [x1, y1] = start.length > 0 ? [start[0].x, start[0].y] : [0, 0];

    return locations
      .map(({ x: x2, y: y2 }) => {
        const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)) / 1000;
        const distanceInteger = 1000 * Math.round((distance * 10)) / 10;
        const angle = Math.atan2(y2 - y1, x2 - x1) + Math.PI * 2;
        const directionIndex = getDirectionIndex(angle);
        const direction = directions[directionIndex];

        return { distance, distanceInteger, direction, angle };
      })
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 2);
  }, [locations, start]);

  console.log("Nearest two locations", nearestLocations);

  const [nearest1, nearest2] = nearestLocations;

  return (
    <div style={{ color: color }}>
      {nearest1 && nearest1.distanceInteger < 0.5 ? (
        <p>
          You need not look far for {name}, just look to the {nearest1.direction}
        </p>
      ) : (
        <div>
          <p>
            There has been talk about {name} to the {nearest1?.direction} of a Sacrificial Stones… 
            <div className={`arrow ${nearest1?.direction.toLowerCase()}`} />
            about {nearest1?.distanceInteger}m away.
          </p>
          {nearest2 && (
            <p>
              Additionally, {name} has been spotted to the {nearest2.direction}… 
              <div className={`arrow ${nearest2.direction.toLowerCase()}`} />
              about {nearest2.distanceInteger}m away.
            </p>
          )}
        </div>
      )}
    </div>
  );
}