import StatCard from "@/components/(adminDashboard)/cards/statCard";
import React from "react";

const statData = [
  {
    id: 1,
    title: "Total Users",
    amount: "4,550",
    increase: false,
    growth: "12%",
    timeLine: "from last month",
  },
  {
    id: 2,
    title: "Total Riders",
    amount: "4,550",
    increase: true,
    growth: "12%",
    timeLine: "from last month",
  },
  {
    id: 3,
    title: "Active Rider",
    amount: "2,341",
    increase: true,
    growth: "12%",
    timeLine: "from last month",
  },
  {
    id: 4,
    title: "Complete Rides Today",
    amount: "525",
    increase: true,
    growth: "12%",
    timeLine: "from last month",
  },
];

export default function StatContainer() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 xl:gap-5 gap-3">
      {statData?.map((item) => (
        <div key={item.id}>
          <StatCard {...item} />
        </div>
      ))}
    </div>
  );
}
