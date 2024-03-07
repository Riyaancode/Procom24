import { Typography } from "@/components/Typography";
import { usePathname } from "next/navigation";

export default async function Payments() {
  return (
    <main className="px-4 pb-10 md:px-12 md:h-[calc(100vh-96px)] flex-center">
      <Typography variant="title" color="secondary" className="text-center">
        Dashboard Payments
      </Typography>
    </main>
  );
}
