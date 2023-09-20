import React from "react";

export default React.memo(ActingSegment);

function ActingSegment(): JSX.Element {
  return (
    <div
      id="actingjobs"
      className="w-screen h-screen p-24 flex flex-col justify-center items-center gap-4"
    >
      <h1>Acting Jobs</h1>
      <div className="flex-1 flex flex-row justify-center items-center gap-4 flex-wrap">
        <div className="flex justify-center">
          <img
            alt="yga"
            src="./assets/yaman-yga.jpg"
            className="zoom flex-1 max-w-[350px] rounded-2xl"
            onClick={() => {
              window.open("https://youtu.be/fgPgEZZ6KGc");
            }}
          />
        </div>
        <div className=" flex justify-center">
          <img
            alt="maajoneh"
            src="./assets/yaman-still.jpg"
            className="zoom flex-1 max-w-[350px] max-h-[200px] rounded-2xl"
            onClick={() => {
              window.open("https://www.youtube.com/watch?v=Bjuev58SGCo");
            }}
          />
        </div>
      </div>
    </div>
  );
}
