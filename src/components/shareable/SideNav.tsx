import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";
import NavLinks from "../NavLinks";

const SideNavbar = () => {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-zinc-300 rounded-tr-lg rounded-br-lg">
      <Link
        href={"/"}
        className={
          "mb-2 flex h-20 items-center justify-center rounded-md bg-zinc-900 p-4 md:h-40 text-white gap-3 text-xl font-bold"
        }
      >
        <Home />
        Home
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 ">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
    </div>
  );
};

export default SideNavbar;
