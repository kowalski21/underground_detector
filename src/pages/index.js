import AuthWrapper from "@/components/AuthWrapper";
import LatestLogs from "@/components/LatestLogs";
import MeasureCard from "@/components/MeasureCard";
import RecordsCardTable from "@/components/RecordsCardTable";
import WelcomeBanner from "@/components/WelcomeBanner";
import React from "react";

const Home = () => {
  return (
    <AuthWrapper>
      <WelcomeBanner />
      <LatestLogs />
      <div className="row mt-3 mb-5">
        <div className="col">
          <RecordsCardTable />
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Home;
