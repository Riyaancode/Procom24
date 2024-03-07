import axios from "axios";

export const getOrders = async (page: number, limit: number) => {
  const res = await axios.get(
    `https://dev-zindabhag.mooo.com/api/orders/getAll?page=${page}&limit=${limit}`,
    {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWU4Y2U1OGVlY2E2Njc1OGJiMDcyZjMiLCJ1c2VyRW1haWwiOiJtYmFiYXJ3YXNlZW1AZ21haWwuY29tIiwidXNlck5hbWUiOiJNIEJhYmFyIFdhc2VlbSIsImFjY291bnRObyI6Ijk4NzY1NDMyMTAiLCJwaG9uZU5vIjoiMDMxMTExMTExMTAiLCJpYXQiOjE3MDk3OTkxNDUsImV4cCI6MTcwOTgwMjc0NX0.YEuTZSpHxrsSKw6rtv4yrT1vOmo-4zDDv8QyyuhoOi8",
      },
    }
  );
  return res?.data;
};
