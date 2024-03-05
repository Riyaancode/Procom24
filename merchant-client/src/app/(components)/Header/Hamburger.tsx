import { cn } from "@/lib/utils";
import { FC } from "react";

interface IHamburger {
  isMenuOpen: boolean;
}

export const Hamburger: FC<IHamburger> = ({ isMenuOpen }) => (
  <div className="relative flex overflow-hidden items-center justify-center w-[50px] h-[50px] transform transition-all duration-200">
    <div
      className={cn(
        "flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center",
        { "group-focus:translate-x-1.5": isMenuOpen }
      )}
    >
      <div
        className={cn(
          "bg-slate-800 group-hover:bg-primary h-[3px] w-7  rounded-full transform transition-all duration-300 origin-left delay-150",
          { "group-focus:rotate-[44deg] group-focus:w-2/3": isMenuOpen }
        )}
      />
      <div
        className={cn(
          "bg-slate-800 group-hover:bg-primary h-[3px] w-7  rounded-full transform transition-all duration-300",
          { "group-focus:translate-x-10": isMenuOpen }
        )}
      />
      <div
        className={cn(
          "bg-slate-800 group-hover:bg-primary h-[3px] w-7 rounded-full transform transition-all duration-300 origin-left delay-150",
          { "group-focus:-rotate-[44deg] group-focus:w-2/3": isMenuOpen }
        )}
      />
    </div>
  </div>
);
