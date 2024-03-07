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
    routeName: "/payments",
  },
  {
    name: "Customers",
    icon: PiUsersThreeBold,
    routeName: "/customers",
  },
  {
    name: "Payment Request",
    icon: GrDocumentText,
    routeName: "/payment-request",
  },
  {
    name: "Report",
    icon: TfiReceipt,
    routeName: "/report",
  },
  {
    name: "Settings",
    icon: LuSettings,
    routeName: "/settings",
  },
];
