// import
import React from "react";
import {
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon
} from "../components/Icons/Icons";

const dashRoutes = [
  {
    path: "/edit",
    name: "Dashboard",
    icon: <PersonIcon color="inherit" />,
    secondaryNavbar: true,
    layout: "/edit",
  },
  {
    path: "/dashboard",
    name: "Profile",
    icon: <StatsIcon color="inherit" />,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Background",
    icon: <CreditIcon color="inherit" />,
    layout: "/admin",
  },
  {
    name: "CONNECT ANALYTICS",
    category: "account",
    state: "pageCollapse",
    views: [

      {
        path: "/dashboard",
        name: "Youtube",
        icon: <DocumentIcon color="inherit" />,
        layout: "/auth",
      },
      {
        path: "/dashboard",
        name: "Instagram",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        layout: "/auth",
      },
      {
        path: "/dashboard",
        name: "Facebook",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        layout: "/auth",
      },
    ],
  },
];
export default dashRoutes;
