// import
import React from "react";
import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "../components/Icons/Icons";

const dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <PersonIcon color="inherit" />,
    secondaryNavbar: true,
    // component: Dashboard,
    layout: "/edit",
  },
  {
    path: "/dashboard",
    name: "Profile",
    icon: <StatsIcon color="inherit" />,
    // component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Background",
    icon: <CreditIcon color="inherit" />,
    // component: Dashboard,
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
        // component: Dashboard,
        layout: "/auth",
      },
      {
        path: "/dashboard",
        name: "Instagram",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        // component: Dashboard,
        layout: "/auth",
      },
      {
        path: "/dashboard",
        name: "Facebook",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        // component: Dashboard,
        layout: "/auth",
      },
    ],
  },
];
export default dashRoutes;
