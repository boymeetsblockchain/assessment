"use client";
import { Sidebar } from "@/data/__sidebar";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Routers = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-center  w-full flex-col space-y-2">
      {Sidebar.map((item, index) => (
        <div
          className={`text-gray-primary  p-2 w-3/4 ${
            pathname == item.href && "bg-blue-primary text-white rounded-lg"
          }`}
          key={index}
        >
          <Link href={`${item.href}`} className="flex items-center gap-x-2">
            <item.icon className="w-4 h-4" />
            <span className="text-xs ml-2">{item.title}</span>
          </Link>
        </div>
      ))}
    </nav>
  );
};
