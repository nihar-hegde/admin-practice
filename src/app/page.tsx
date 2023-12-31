import { buttonVariants } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-center justify-center rounded-lg bg-black p-4 md:h-52 text-2xl md:text-6xl font-bold text-white">
        Admin Dashboard
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row ">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />
          <p className="text-xl text-gray-800 md:text-3xl md:leading-normal">
            <strong>Welcome to Admin Dashboard.</strong> <br /> This is the
            ultimate Admin Dashboard for all your needs!!!
          </p>
          <Link
            href={"/login"}
            className={`${buttonVariants()} font-bold gap-1 relative inline-flex items-center group`}
          >
            Login
            <LogIn className="ml-1 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
        <div className="flex items-center bg-gray-50 justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <p>
            Some random image are to be showen here so do not worry about this
            stuff
          </p>
        </div>
      </div>
    </main>
  );
}
