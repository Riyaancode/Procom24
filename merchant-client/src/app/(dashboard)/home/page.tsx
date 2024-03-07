"use client";

import { Typography } from "@/components/Typography";
import Image from "next/image";
import Graph from "../../../../public/assets/graph.png";

import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Legend,
  Tooltip,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { useEffect, useState } from "react";
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(CategoryScale, LinearScale, BarElement);

export default function Home() {

  const [usersData, setUsersData] = useState([])

  useEffect(() => {
    const fetchData = () => {
      const config = {
        headers: {
          'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWU4Y2UyN2VlY2E2Njc1OGJiMDcyZWEiLCJ1c2VyRW1haWwiOiJtYmFiYXJ3YXNlZW0rMUBnbWFpbC5jb20iLCJ1c2VyTmFtZSI6IlVzZXJObzEiLCJhY2NvdW50Tm8iOiIxMjM0NTY3ODkwIiwicGhvbmVObyI6IjAzMTExMTExMTExIiwiaWF0IjoxNzA5NzU2NTgxLCJleHAiOjE3MDk3NjAxODF9.SIG5vOszVZdGeeFCAGTSa-XK6XzJ-jVuyPNvRMEjU4w`
        }
      };
      axios.get('https://dev-zindabhag.mooo.com/api/orders/getAll?page=1&limit=50', config)
        .then(res => {
          const apiData = res.data;
          console.log({ apiData });
          setUsersData(res.data);
        })
        .catch(error => {
          console.log({ error })
        });
    }

    fetchData()
  }, [])

  const getStatusCounts = () => {
    const statusCounts = {
      pending: 0,
      rejected: 0,
      completed: 0,
    };

    usersData.forEach((order) => {
      if (order.status === "pending") {
        statusCounts.pending++;
      } else if (order.status === "rejected") {
        statusCounts.rejected++;
      } else if (order.status === "succeeded") {
        statusCounts.completed++;
      }
    });

    return [statusCounts.pending, statusCounts.rejected, statusCounts.completed];
  };

  const getPaymentAmounts = (status) => {
    return usersData.filter(order => order.status === status).map(order => order.paymentAmount);
  };

  const statusLabels = ["pending", "succeeded", "rejected"];

  const data = {
    labels: ["Pending", "Rejected", "Succeeded"],
    datasets: [
      {
        data: getStatusCounts(),
        backgroundColor: ["#FFCE56", "#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#FFCE56", "#FF6384", "#36A2EB"],
      },
    ],
  };

  const data2 = {
    labels: statusLabels,
    datasets: [
      {
        label: "Payment Amount",
        backgroundColor: "#36A2EB",
        borderColor: "#36A2EB",
        borderWidth: 1,
        hoverBackgroundColor: "#36A2EB",
        hoverBorderColor: "#36A2EB",
        data: statusLabels.map(status => getPaymentAmounts(status)),
      },
    ],
  };

  return (
    <main className="">
      <div>
        <Typography variant="heading" color="secondary" className="text-center">
          Dashboard
        </Typography>
        <div className="bg-slate-100 border rounded-md p-8 my-8">
          <Typography variant="subheading" color="secondary">
            Getting start with us
          </Typography>
          <div className="py-8 flex flex-col md:flex-row">
            <div className="flex md:w-1/3 flex-col">
              <Image src={Graph} alt="stats" width={250} />
              <p className="my-4">Monitor payment</p>
              <p className="text-sm text-gray-500">
                View real-time updates on successful payments, refunds, and
                other transaction-related activities
              </p>
              <p className="text-primary mt-4">Read more</p>
            </div>
            <div className="flex md:w-1/3 flex-col">
              <Image src={Graph} alt="stats" width={250} />
              <p className="my-4">Monitor payment</p>
              <p className="text-sm text-gray-500">
                View real-time updates on successful payments, refunds, and
                other transaction-related activities
              </p>
              <p className="text-primary mt-4">Read more</p>
            </div>
            <div className="flex my-8 md:my-0 md:w-1/3 flex-col">
              <Image src={Graph} alt="stats" width={250} />
              <p className="my-4">Monitor payment</p>
              <p className="text-sm text-gray-500">
                View real-time updates on successful payments, refunds, and
                other transaction-related activities
              </p>
              <p className="text-primary mt-4">Read more</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <Typography className="my-8" variant="subheading" color="secondary">
          Reports
        </Typography>
      </div>
      <div className="flex justify-around">
        <div className="w-1/3">
          <Doughnut data={data} />
        </div>
        <div className="w-1/3">
          <Bar
            data={data2}
            width={100}
            height={400}
            options={{
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>
    </main>
  );
}
