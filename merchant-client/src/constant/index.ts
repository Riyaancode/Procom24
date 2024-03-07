import { BsCurrencyDollar } from "react-icons/bs";
import { GrDocumentText } from "react-icons/gr";
import { LuSettings } from "react-icons/lu";
import { MdOutlineDashboard } from "react-icons/md";
import { PiUsersThreeBold } from "react-icons/pi";
import { TfiReceipt } from "react-icons/tfi";

export const SIDEBAR = [
  {
    name: "Dashboard",
    icon: MdOutlineDashboard,
    routeName: "/home",
  },
  {
    name: "Payments",
    icon: BsCurrencyDollar,
    routeName: "/payment",
  },
  {
    name: "Customers",
    icon: PiUsersThreeBold,
    routeName: "/customer",
  },
  {
    name: "Payment Request",
    icon: GrDocumentText,
    routeName: "/",
  },
  {
    name: "Report",
    icon: TfiReceipt,
    routeName: "/",
  },
  {
    name: "Settings",
    icon: LuSettings,
    routeName: "/",
  },
];
