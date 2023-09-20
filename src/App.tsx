import "./App.css";
import React from "react";
import WelcomeSegment from "./segments/WelcomeSegment/WelcomeSegment";
import FluintSegment from "./segments/ProjectsSegment/FluintSegment";
import FeaturedOnSegment from "./segments/FeaturedOnSegment";
import TheLanguageSegment from "./segments/ProjectsSegment/TheLanguageSegment";
import RayTracerSegment from "./segments/ProjectsSegment/RayTracerSegment";
import ActingSegment from "./segments/ActingSegment";
import SocialsSegment from "./segments/SocialsSegment";

function App() {
  return (
    <div className="App">
      <WelcomeSegment />
      <FluintSegment />
      <TheLanguageSegment />
      <FeaturedOnSegment />
      <RayTracerSegment />
      <ActingSegment />
      <SocialsSegment />
    </div>
  );
}

export default App;
