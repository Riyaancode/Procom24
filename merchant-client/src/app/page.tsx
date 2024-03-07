import { Typography } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroSectionImage from '../../public/assets/HeroSection.png'
import MonitorPayment from '../../public/assets/MonitorPayment.png'
import Pricing from "./(components)/Pricing";

export default async function Home() {
  return (
    <main>
      <div className="px-4 bg-[#744FEA] pb-10 md:px-12 md:h-[calc(100vh-96px)] flex-center">
        {/* first section */}
        <div className="flex flex-col md:flex-row w-full mt-28 md:m-20">
          <div className="md:w-5/12 items-center justify-center flex flex-col">
            <Typography
              variant="heading"
              className="mb-4 !leading-normal text-white"
            >
              Optimize bussiness payments
            </Typography>
            <p className="text-white">
              Payment processing platform that facilitates transactions between
              businesses and their customers.
            </p>
            <Button className="bg-white text-[#744FEA] py-6 my-8">
              Open account
            </Button>
          </div>
          <div className="md:w-7/12">
            <Image src={HeroSectionImage} alt="Hero Section Image" />
          </div>
        </div>
      </div>
      {/* second section */}
      <div className="px-4 pb-10 md:px-12 md:h-[calc(90vh-96px)] flex-center">
        <div className="flex flex-col md:flex-row w-full mt-28 md:m-20">
          <div className="md:w-6/12">
            <Image src={MonitorPayment} alt="Monitor Payment Image" />
          </div>
          <div className="md:w-5/12">
            <p className="text-gray-500 px-2">You can</p>
            <Typography variant="heading" className="mb-4 !leading-normal">
              <span className="text-red-400">Monitor</span> payments
            </Typography>
            <p className="text-gray-500 px-2">
              View real-time updates on successful payments, returns, and other
              transactions-related activities.
            </p>
            <p className="m-4 text-red-400">Learn more -{">"}</p>
          </div>
        </div>
      </div>
      {/* third section */}
      <div className="px-4 pb-10 md:px-12 md:h-[calc(90vh-96px)] flex-center">
        <div className="flex flex-col md:flex-row w-full mt-28 md:m-20">
          <div className="md:w-5/12">
            <p className="text-gray-500 px-2">You can</p>
            <Typography variant="heading" className="mb-4 !leading-normal">
              <span className="text-[#744FEA]">Manage</span> customers
            </Typography>
            <p className="text-gray-500 px-2">
              View real-time updates on successful payments, returns, and other
              transactions-related activities.
            </p>
            <p className="m-4 text-[#744FEA]">Learn more -{">"}</p>
          </div>
          <div className="md:w-7/12">image</div>
        </div>
      </div>
      {/* fourth section */}
      <div className="py-20">
        <div className="w-10/12 p-4 md:py-32 md:px-64 flex justify-center flex-col gap-8 items-center bg-gray-100 mx-auto rounded-md">
          <p className="text-center font-semibold">
            Simplify your business payments with our intuitive tool. Manage,
            track and optimize your financial transactions effortlessly. Take
            control of your finances and focus on growing your business.
          </p>
          <Button className="mx-auto bg-red-400">Open account</Button>
        </div>
      </div>
      {/* five section */}
      <div>
        <div className="w-10/12 mx-auto flex flex-col items-center">
          <Typography variant="heading" className="mb-4 text-center !leading-normal">
            Pricing
          </Typography>
          <Pricing />
        </div>
      </div>
    </main>
  );
}
