"use client";

import { FcDocument, FcFolder, FcImport, FcReadingEbook } from "react-icons/fc";
import { ImCross } from "react-icons/im";
import Image from "next/image";
import Link from "next/link";
import { TbBrandAirtable } from "react-icons/tb";

interface IDrawer {
  handleDrawer: () => void;
}

const SIDEBAR = [
  {
    name: "Users Management",
    icon: <FcReadingEbook size={25} />,
    routeName: "/",
  },
  {
    name: "Brand Management",
    icon: <TbBrandAirtable size={25} color="blue" />,
    routeName: "/brands",
  },
  {
    name: "Projects Management",
    icon: <FcFolder size={25} />,
    routeName: "/projects",
  },
  {
    name: "Prompts Management",
    icon: <FcDocument size={25} />,
    routeName: "/prompt",
  },
];

const Drawer: React.FC<IDrawer> = ({ handleDrawer }) => {
  return (
    <div
      id="drawer-navigation"
      className="fixed top-0 left-0 z-40 w-64 overflow-y-auto bg-white transition-transform duration-700 border border-l-slate-800 min-h-screen"
      aria-labelledby="drawer-navigation-label"
    >
      <div
        className="absolute right-2 p-2 bg-red-200 rounded-md top-2 cursor-pointer"
        onClick={handleDrawer}
      >
        <ImCross size={25} color="red" />
      </div>
      <div className="flex justify-center mt-8">Logo</div>
      <div className="h-full px-3 py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          {SIDEBAR.map((sidebar) => (
            <li key={sidebar.name}>
              <Link
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg group hover:bg-slate-200"
              >
                {sidebar.icon}
                <span className="ms-3">{sidebar.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute bottom-8 w-64 px-3 py-4">
        <Link
          onClick={() => {}}
          href="/login"
          className="flex items-center p-2 text-gray-900 rounded-lg group hover:bg-slate-200"
        >
          <FcImport size={25} color="blue" />
          <span className="ms-3 font-medium">Log Out</span>
        </Link>
      </div>
    </div>
  );
};

export default Drawer;
