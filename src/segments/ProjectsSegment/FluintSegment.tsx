import React from "react";

export default React.memo(ProjectsSegment);

function ProjectsSegment(): JSX.Element {
  return (
    <div className="w-screen h-screen p-24 flex flex-row justify-center items-center flex-wrap">
      <video
        id="background-video"
        autoPlay
        loop
        muted
        src="./assets/fluint-demo.mp4"
      ></video>
      <h1 className="text-red-500 smooth flex-1">Fluint</h1>
      <div className="flex-1">
        <p className="text-white">
          This project was born out of the frustrations of the cumbersome,
          non-intuitive, level design process that modern 3D tools provide. our
          mission with this project is to build a utility that's aimed at making
          the level design process as efficient and mindless as possible.
        </p>
        <button className="text-sky-400" onClick={() => window.open('https://github.com/Rainboi64/Fluint')}>click here to learn more...</button>
      </div>
    </div>
  );
}
