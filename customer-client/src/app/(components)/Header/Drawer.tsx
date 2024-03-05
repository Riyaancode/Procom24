import { cn } from "@/lib/utils";
import { MOBILE_NAV_LINKS } from "@/routes";
import Link from "next/link";

import { FC } from "react";

interface IDrawer {
  isMenuOpen: boolean;
}

export const Drawer: FC<IDrawer> = ({ isMenuOpen }) => (
  <div
    id="dropdown"
    className={cn(
      "fixed top-[70px] right-0 text-primary bg-white w-full z-50 h-full transition-all duration-500 ease-in-out",
      {
        "translate-x-0": isMenuOpen,
        "translate-x-full": !isMenuOpen,
      }
    )}
  >
    <div className="px-6" id="links">
      {MOBILE_NAV_LINKS.map((path, index) => (
        <Link
          key={path.name}
          className={`py-4 text-3xl block transition-transform duration-500 ease-in-out translate-x-${
            isMenuOpen ? "0" : "full"
          } link font-bold`}
          id={path.name}
          href={path.link}
          style={{ transitionDelay: index * 100 + "ms" }}
        >
          {path.name}
        </Link>
      ))}
    </div>
  </div>
);
