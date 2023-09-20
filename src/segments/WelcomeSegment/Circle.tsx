import React from "react";

export default React.memo(Circle);

function rng(max: number): number {
  return Math.round(Math.random() * max);
}

function Circle(): JSX.Element {
  return (
    <div
      className={`rounded-full`}
      style={{
        position: "absolute",
        backgroundColor: `rgb(${rng(255)}, ${rng(255)}, ${rng(255)})`,
        width: rng(6),
        height: rng(6),
      }}
    />
  );
}
