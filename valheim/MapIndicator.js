import React from "react";

const coordinateToPercentage = (coordinate) => ((coordinate + 10500) / 21000) * 100

export function MapIndicator({ x, y, size, color, name, children }) {
  const xPercentage = coordinateToPercentage(x)
  const yPercentage = 100 - coordinateToPercentage(y)
  return (
    <div
      title={`${name}\ngoto ${parseInt(x)} ${parseInt(y)}`}
      style={{
        position: "absolute",
        top: `${yPercentage}%`,
        left: `${xPercentage}%`,
        transform: 'translate(-50%, -50%)',
        margin: 0,
        padding: 0,
        lineHeight: 0,
        width: `${size}%`,
        height: `${size}%`,
        background: `radial-gradient(circle at center, ${color} 0%, ${color} 5%, ${color + "CF"} 7%, ${color+"7F"} 8%, ${color+"3F"} 10%, transparent 100%)`,
        backgroundColor: color + "0A",
        border: `1px solid ${color + "20"}`,
        borderRadius: "50%",
        cursor: "default",
      }}
    >
      {children}
    </div>
  );
}
