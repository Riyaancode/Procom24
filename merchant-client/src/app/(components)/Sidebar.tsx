"use client";

import React from "react";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { FcDocument, FcFolder, FcImport, FcReadingEbook } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";

import Drawer from "./Drawer";
import { SIDEBAR } from "@/constant";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface ISidebar {
  children: React.ReactNode;
}
const Sidebar: React.FC<ISidebar> = ({ children }) => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const path = usePathname();

  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed inset-y-0 left-0 bg-white hidden md:block shadow-md max-h-screen w-60"
      >
        <div className="flex flex-col justify-between h-full">
          <div className="flex-grow">
            <div className="px-4 py-6 text-center border-b">
              <h1 className="text-xl font-bold leading-none">
                <span className="text-yellow-700">Task Manager</span> App
              </h1>
            </div>
            <div className="p-4">
              <ul className="space-y-1">
                {SIDEBAR.map((item) => (
                  <li key={item.routeName}>
                    <Link
                      href={item.routeName}
                      className={cn(
                        "flex items-center text-slate-600 rounded-lg text-sm py-3 px-4",
                        {
                          "bg-primary": item.routeName == path,
                          "text-white": item.routeName == path,
                          "font-bold": item.routeName == path,
                        }
                      )}
                    >
                      <item.icon
                        size={20}
                        className={cn("mr-2", {
                          "text-white": item.routeName == path,
                        })}
                      />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </aside>
      <div className="md:hidden absolute top-4 bg-gray-200 p-2 rounded-tr-md rounded-br-md">
        <BsFillMenuButtonWideFill
          size={25}
          color="black"
          onClick={handleDrawer}
        />
        {openDrawer ? <Drawer {...{ handleDrawer }} /> : null}
      </div>

      <div className="p-4 ml-0 md:ml-64">{children}</div>
    </>
  );
};

export default Sidebar;
