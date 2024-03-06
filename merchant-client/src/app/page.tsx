import { Typography } from "@/components/Typography";

export default async function Home() {
  return (
    <main className="px-4 pb-10 md:px-12 md:h-[calc(100vh-96px)] flex-center">
      <Typography variant="title" color="secondary" className="text-center">
        Mission Procom'24
      </Typography>
    </main>
  );
}
