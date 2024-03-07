"use client";

import Table from "@/app/(components)/Table";
import { Typography } from "@/components/Typography";
import { getOrders } from "@/services";
import { useEffect, useState } from "react";
import { HiOutlineClock } from "react-icons/hi";
import { IoMdCheckmark } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { PiCirclesFourLight } from "react-icons/pi";

export default function Home() {
  const [orders, setOrders] = useState([]);
  const [selectedTab, setSelectedTab] = useState("All");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getOrders(1, 10).then((res) => {
      setLoading(true);
      setOrders(res);
      setLoading(false);
    });
  }, []);

  const filteredOrders = selectedTab === "All" ? orders : orders.filter(order => order.status.toLowerCase() === selectedTab.toLowerCase());

  const totalAmounts = {
    All: orders.reduce((acc, order) => acc + order.paymentAmount, 0),
    Succeeded: orders.reduce((acc, order) => order.status === "succeeded" ? acc + order.paymentAmount : acc, 0),
    Pending: orders.reduce((acc, order) => order.status === "pending" ? acc + order.paymentAmount : acc, 0),
    Rejected: orders.reduce((acc, order) => order.status === "rejected" ? acc + order.paymentAmount : acc, 0)
  };

  const totalRecords = {
    All: orders.length,
    Succeeded: orders.filter(order => order.status === "succeeded").length,
    Pending: orders.filter(order => order.status === "pending").length,
    Rejected: orders.filter(order => order.status === "rejected").length
  };

  return (
    <main className="">
      <Typography variant="subheading">Payments</Typography>
      <div className="flex gap-6">
        <div onClick={() => setSelectedTab("All")} className={`w-52 rounded-md mt-8 p-4 border bg-purple-100 ${selectedTab === "All" ? "border-purple-700" : ""}`}>
          <div className="flex justify-between">
            <p>All Payments</p>
            <div className="w-8 h-8 flex justify-center items-center rounded-full bg-purple-700">
              <PiCirclesFourLight color="white" />
            </div>
          </div>
          <p className="text-lg">{`${totalAmounts.All.toLocaleString()} PKR`}</p>
          <div className="border p-1 rounded-xl text-xs border-purple-700 w-24 mt-3">
            <p className="text-center text-purple-700">{`${totalRecords.All} records`}</p>
          </div>
        </div>

        <div onClick={() => setSelectedTab("succeeded")} className={`w-52 rounded-md mt-8 p-4 bg-green-50 border  ${selectedTab === "succeeded" ? "border-green-700" : ""}`}>
          <div className="flex justify-between">
            <p>Succeeded</p>
            <div className="w-8 h-8 flex justify-center items-center rounded-full bg-green-500">
              <IoMdCheckmark color="white" />
            </div>
          </div>
          <p className="text-lg">{`${totalAmounts.Succeeded.toLocaleString()} PKR`}</p>
          <div className="border p-1 rounded-xl text-xs border-green-500 w-24 mt-3">
            <p className="text-center text-green-500">{`${totalRecords.Succeeded} records`}</p>
          </div>
        </div>
        <div onClick={() => setSelectedTab("pending")} className={`w-52 rounded-md mt-8 p-4 bg-yellow-50 border ${selectedTab === "pending" ? "border-yellow-700" : ""}`}>
          <div className="flex justify-between">
            <p>Pending</p>
            <div className="w-8 h-8 flex justify-center items-center rounded-full bg-yellow-600">
              <HiOutlineClock color="white" />
            </div>
          </div>
          <p className="text-lg">{`${totalAmounts.Pending.toLocaleString()} PKR`}</p>
          <div className="border p-1 rounded-xl text-xs border-yellow-600 w-24 mt-3">
            <p className="text-center text-yellow-600">{`${totalRecords.Pending} records`}</p>
          </div>
        </div>
        <div onClick={() => setSelectedTab("rejected")} className={`w-52 rounded-md mt-8 p-4 bg-red-50 border ${selectedTab === "rejected" ? "border-red-700" : ""}`}>
          <div className="flex justify-between">
            <p>Rejected</p>
            <div className="w-8 h-8 flex justify-center items-center rounded-full bg-red-600">
              <IoCloseOutline color="white" />
            </div>
          </div>
          <p className="text-lg">{`${totalAmounts.Rejected.toLocaleString()} PKR`}</p>
          <div className="border p-1 rounded-xl text-xs border-red-600 w-24 mt-3">
            <p className="text-center text-red-600">{`${totalRecords.Rejected} records`}</p>
          </div>
        </div>
      </div>
      <div>{loading ? <p>Loading</p> : <Table data={filteredOrders} />}</div>
    </main>
  );
}
