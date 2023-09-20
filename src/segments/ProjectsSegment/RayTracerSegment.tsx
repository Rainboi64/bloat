import React from "react";

export default React.memo(ProjectsSegment);

function ProjectsSegment(): JSX.Element {
  return (
    <div
      id="raytracer"
      className="w-screen h-screen p-24 flex flex-row-reverse justify-center items-center"
    >
      <img alt="render" src="./assets/output.png" className="flex-1" />
      <div className="flex-1">
        <h1 className="text-white">Ray Tracer</h1>
        <p className="text-white">
          A pretty nifty multi-threaded Monte Carlo rendering based ray tracer.
          It's essentially a mathematical model for the human eye, while it's
          not very accurate it looks very good, it will cause some noise because
          it utilizes some randomness. This project was made for school.
        </p>
        <button
          className="text-sky-400"
          onClick={() => window.open("https://github.com/Rainboi64/RayTracer")}
        >
          click here to learn more...
        </button>
      </div>
    </div>
  );
}
