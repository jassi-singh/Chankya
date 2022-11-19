import React from "react";
import ScoreCard from "../components/ScoreCards";

const Dashboard = () => {
  return (
    <div className="h-full flex flex-col gap-2">
      <ScoreCard />
      <ScoreCard />
      <ScoreCard />
      <ScoreCard />
      <ScoreCard />
      <ScoreCard />
    </div>
  );
};

export default Dashboard;
