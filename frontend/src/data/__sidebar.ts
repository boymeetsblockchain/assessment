import {
  LayoutGrid,
  Archive,
  UserRound,
  CalendarRange,
  ChartNoAxesColumnIncreasing,
  CloudDownload,
  Settings,
  LogOut,
  Trash2,
  User2,
} from "lucide-react";

export const Sidebar = [
  {
    title: "Dashboard",
    icon: LayoutGrid,
    href: "/",
  },
  {
    title: "Classes",
    icon: Archive,
    href: "/classes",
  },
  {
    title: "Create Avatar",
    icon: User2,
    href: "/avatar",
  },
  {
    title: "My Avatar",
    icon: UserRound,
    href: "/my-avatar",
  },
  {
    title: "Schedule",
    icon: CalendarRange,
    href: "/schedule",
  },
  {
    title: "Grades",
    icon: ChartNoAxesColumnIncreasing,
    href: "/grades",
  },
  {
    title: "Downloads",
    icon: CloudDownload,
    href: "/downloads",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
  {
    title: "Trash",
    icon: Trash2,
    href: "/trash",
  },
  {
    title: "Log Out",
    icon: LogOut,
    href: "/logout",
  },
];
