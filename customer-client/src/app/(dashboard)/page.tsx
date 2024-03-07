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

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(CategoryScale, LinearScale, BarElement);

const data = {
  labels: ["Pending", "Rejected", "Completed"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

const data2 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "#36A2EB",
      borderColor: "#36A2EB",
      borderWidth: 1,
      hoverBackgroundColor: "#36A2EB",
      hoverBorderColor: "#36A2EB",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

export default function Home() {
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
