import React from "react";
import CardTable from "components/Cards/CardTable";
import HeaderStats from "components/Headers/HeaderStats";
import AdminNavbar from "components/Navbars/AdminNavbar.js";

export default function Dashboard() {
  return (
    <>
      <AdminNavbar />
      <div className="relative bg-gray-100 pt-8">
        <HeaderStats />
        <div className="flex flex-wrap mt-4">
          <div className="w-full mb-12 xl:mb-0 px-4">
            <CardTable />
          </div>
        </div>
      </div>
    </>
  );
}
