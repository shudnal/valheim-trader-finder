import React from "react";
import { MapIndicator } from "./MapIndicator";

export function WorldMap({ locationStart, locationsHaldor, locationsHildir, locationsWitch }) {
  return (
    <>
    <p style={{
      textAlign: 'center',
      color: '#606060'
    }}><em>Hover on a location to see name and goto command.</em></p>
    <div
      style={{
        padding: "50%",
        border: "2px solid #353535",
        borderRadius: "50%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {locationStart.map(({ x, y }) => (
        <MapIndicator key={`${x},${y}`} size={0.6} x={x} y={y} color="transparent" name="Sacrificial Stones" >+</MapIndicator>
      ))}
      {locationsHaldor.map(({ x, y }) => (
        <MapIndicator key={`${x},${y}`} size={6} x={x} y={y} color="#965317" name="Haldor" />
      ))}
      {locationsHildir.map(({ x, y }) => (
        <MapIndicator key={`${x},${y}`} size={6} x={x} y={y} color="#000078" name="Hildir" />
      ))}
      {locationsWitch.map(({ x, y }) => (
        <MapIndicator key={`${x},${y}`} size={6} x={x} y={y} color="#559617" name="Bog Witch" />
      ))}
    </div>
    </>
  );
}