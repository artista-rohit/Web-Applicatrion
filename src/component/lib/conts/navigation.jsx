import {
    HiOutlineCog,
  HiOutlineCurrencyDollar,
  HiOutlineGift,
  HiOutlineQuestionMarkCircle,
  HiOutlineViewGrid,
} from "react-icons/hi";
import { RiFileUserLine } from "react-icons/ri";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "product",
    label: "Product",
    path: "/product",
    icon: <MdProductionQuantityLimits />,
  },
  {
    key: "order",
    label: "Order",
    path: "/order",
    icon: <HiOutlineGift />,
  },
  {
    key: "customers",
    label: "Customers",
    path: "/customers",
    icon: <RiFileUserLine />,
  },
  {
    key: "transactions",
    label: "Transactions",
    path: "/transactions",
    icon: <HiOutlineCurrencyDollar />,
  },
  {
    key: "message",
    label: "Message",
    path: "/message",
    icon: <BiMessageDetail />,
  },
];


export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
      key: 'settings',
      label: 'Settings',
      path: '/settings',
      icon: <HiOutlineCog />
    },
    {
      key: 'support',
      label: 'Help & Support',
      path: '/support',
      icon: <HiOutlineQuestionMarkCircle />
    },
    
  ]
