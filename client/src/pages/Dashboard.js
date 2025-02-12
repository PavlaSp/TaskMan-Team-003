import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashboardSidebar from "../modules/DashboardSidebar";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* Sidebar */}
        <DashboardSidebar />
      </div>
      {/* profile.. */}
      {tab === "profile" && <div>Profile content goes here</div>}
    </div>
  );
}
