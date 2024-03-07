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

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getOrders(1, 10).then((res) => {
      setLoading(true);
      setOrders(res);
      setLoading(false);
    });
  }, []);

  return (
    <main className="">
      <Typography variant="subheading">Payments</Typography>
      <div className="flex gap-6">
        <div className="w-52 rounded-md mt-8 p-4 border bg-purple-100 border-purple-700">
          <div className="flex justify-between">
            <p>All Payments</p>
            <div className="w-8 h-8 flex justify-center items-center rounded-full bg-purple-700">
              <PiCirclesFourLight color="white" />
            </div>
          </div>
          <p className="text-lg">1,380 PKR</p>
          <div className="border p-1 rounded-xl text-xs border-purple-700 w-24">
            <p className="text-center text-purple-700">234 records</p>
          </div>
        </div>
        <div className="w-52 rounded-md mt-8 p-4 bg-green-50 border-green-700">
          <div className="flex justify-between">
            <p>Succeeded</p>
            <div className="w-8 h-8 flex justify-center items-center rounded-full bg-green-500">
              <IoMdCheckmark color="white" />
            </div>
          </div>
          <p className="text-lg">2,380 PKR</p>
          <div className="border p-1 rounded-xl text-xs border-green-500 w-24">
            <p className="text-center text-green-500">234 records</p>
          </div>
        </div>
        <div className="w-52 rounded-md mt-8 p-4 bg-yellow-50 border-yellow-700">
          <div className="flex justify-between">
            <p>Pending</p>
            <div className="w-8 h-8 flex justify-center items-center rounded-full bg-yellow-600">
              <HiOutlineClock color="white" />
            </div>
          </div>
          <p className="text-lg">380 PKR</p>
          <div className="border p-1 rounded-xl text-xs border-yellow-600 w-24">
            <p className="text-center text-yellow-600">234 records</p>
          </div>
        </div>
        <div className="w-52 rounded-md mt-8 p-4 bg-red-50 border-red-700">
          <div className="flex justify-between">
            <p>Rejected</p>
            <div className="w-8 h-8 flex justify-center items-center rounded-full bg-red-600">
              <IoCloseOutline color="white" />
            </div>
          </div>
          <p className="text-lg">590 PKR</p>
          <div className="border p-1 rounded-xl text-xs border-red-600 w-24">
            <p className="text-center text-red-600">234 records</p>
          </div>
        </div>
      </div>
      <div>{loading ? <p>Loading</p> : <Table data={orders} />}</div>
    </main>
  );
}
