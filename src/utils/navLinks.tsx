import { RiDashboardHorizontalFill, RiEBike2Fill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import Link from "next/link";
import { CalendarDays, CirclePlus, UsersRound, Wallet } from "lucide-react";
import { BiSupport } from "react-icons/bi";


export const navLinks = [
  {
    key: "dashboard",
    icon: <RiDashboardHorizontalFill size={18} />,
    label: <Link href={"/dashboard"}>Dashboard</Link>,
  },
  {
    key: "account-details",
    icon: <UsersRound size={18} />,
    label: <div>Users Details</div>,
    children: [
      {
        key: "account-details",
        label: <Link href={"/users/users"}>Users</Link>,
      },
      {
        key: "Rider",
        label: <Link href={"/users/rider"}>Rider</Link>,
      },
    ]
  },
  {
    key: "rider-verification",
    icon: <RiEBike2Fill size={18} />,
    label: <Link href={"/rider-verification"}>Rider Verification</Link>,
  },
  {
    key: "earning",
    icon: <Wallet size={18} />,
    label: <Link href={"/earning"}>Earning</Link>,
  },
  {
    key: "settings",
    icon: <IoSettingsOutline size={18} />,
    label: <Link href={"/settings"}>Settings</Link>,
  },
  // {
  //   key: "logout",
  //   icon: <RiLogoutCircleLine size={18} />,
  //   label: <Link href={"/login"}>Logout</Link>,
  // },
];
