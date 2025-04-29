import Image from "next/image";
import { SidebarHeader } from "./__sidebar__subcomponents/header";
import { Routers } from "./__sidebar__subcomponents/routers";

export const Sidebar = () => {
  return (
    <aside className="w-64 shrink-0 space-y-5 shadow-md p-4 rounded-2xl ">
      <SidebarHeader />
      <Routers />
    </aside>
  );
};
