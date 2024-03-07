"use client";

import Table from "@/app/(components)/Table";
import { Typography } from "@/components/Typography";
import { getOrders } from "@/services";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Cutomers() {
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
    <main className="px-4 pb-10 md:px-12 md:h-[calc(100vh-96px)] flex-center">
      <div>{loading ? <p>Loading</p> : <Table data={orders} />}</div>
    </main>
  );
}
