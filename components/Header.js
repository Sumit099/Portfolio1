// next imagge
import Image from "next/image";

//next link
import Link from "next/link";

//components
import Socials from "../components/Socials";

//react icon
import { BiDownload } from "react-icons/bi";

import { Sora } from "@next/font/google";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] ">
      <div className="container mx-auto ">
        <div className="flex flex-col items-center lg:flex-row justify-between gap-y-5 py-6">
          {/* logo */}
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              width={220}
              height={48}
              alt=""
              priority={true}
            />
          </Link>
          {/* CV Download */}
          <a
            download
            href="downloads/fonts.zip"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-accent/80 to-orange-400 group-hover:from-accent/80 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-accent/60 min-w-[170px] min-h-[40px]"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-[#151326] rounded-md group-hover:bg-opacity-0 font-sora flex flex-row gap-x-2 justify-center items-center ">
              Download CV <BiDownload className="animate-bounce w-7 h-7 " />
            </span>
          </a>
          {/* Socials */}
          {/* <Socials/> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
