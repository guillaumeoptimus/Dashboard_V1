"use client";
import React from "react";
import Hero from "@/components/dashboard/Hero";
import KPIs from "@/components/dashboard/KPIs";
import TasksToday from "@/components/dashboard/TasksToday";
import CRMCompact from "@/components/dashboard/CRMCompact";
import EmailCompact from "@/components/dashboard/EmailCompact";
import QuickActions from "@/components/dashboard/QuickActions";
export default function Dashboard(){
  return (<div className="space-y-6">
    <Hero/>
    <KPIs/>
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      <div className="xl:col-span-2 space-y-6"><TasksToday/><CRMCompact/></div>
      <div className="xl:col-span-1 space-y-6"><QuickActions/><EmailCompact/></div>
    </div>
  </div>);
}
