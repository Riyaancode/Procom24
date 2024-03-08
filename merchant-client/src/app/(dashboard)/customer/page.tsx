"use client";

import Table from "@/app/(components)/Table";
import { Typography } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { getOrders } from "@/services";
import { useEffect, useState } from "react";
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

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

  const exportData = () => {
    return orders.map((order) => ({
      UserName: order.userName,
      Email: order.email,
      PaymentAmount: order.paymentAmount,
      CustomerAccountNumber: order.customerAccountNumber,
      MerchantAccountNumber: order.merchantAccountNumber,
      BankName: order.bankName,
      PaymentPurpose: order.paymentPurpose,
      Status: order.status,
    }));
  };

  const exportToExcel = () => {
    const data = exportData();

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Orders');

    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

    const fileName = 'orders.xlsx';
    saveAs(
      new Blob([s2ab(wbout)], { type: 'application/octet-stream' }),
      fileName
    );
  };

  const s2ab = (s) => {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
    return buf;
  };

  return (
    <main className="px-4 md:px-12 flex-center">
      <div>
        <div className="flex justify-between">
          <div>
            <Typography variant="subheading" className="font-extrabold text-black">
              Customers
            </Typography>
          </div>
          <div>
            <Button
              className=""
              size={"lg"}
              variant={"default"}
              onClick={exportToExcel}
            >
              Export
            </Button>
          </div>
        </div>
        <div className="w-[77%] mt-10 absolute">
          <hr />
          <h3 className="mt-5 flex items-center gap-2">
            <span className="font-semibold">{orders?.length}</span>
            in total
          </h3>
        </div>
        {loading ? <p>Loading</p> : <Table data={orders} />}
      </div>
    </main>
  );
}
