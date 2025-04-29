import { Mail, BellDot, CircleHelp } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className=" bg-white h-auto max-w-screen-lg mb-10 mx-auto flex items-center  rounded-lg w-full ">
      <div className="flex gap-x-4 items-center w-full  justify-between px-4 py-2">
        <div className="w-1/2">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search anything"
            className="bg-[#F4F7FC] w-full placeholder:text-xs placeholder:ml-10 focus-visible:outline-none rounded-full px-2 py-1 focus:outline-none border-0"
          />
        </div>
        <div className="flex items-center gap-x-3">
          <Mail color="#BDBDBD" />
          <BellDot color="#828282" />
          <CircleHelp color="#BDBDBD" />
        </div>
      </div>
    </nav>
  );
};
