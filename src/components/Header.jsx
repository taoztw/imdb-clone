import Link from "next/link";
import MenuItem from "./MenuItem";
import { FaHome } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import DarkModeSwitch from "./DarkModeSwitch";

function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={FaHome}></MenuItem>
        <MenuItem title="about" address="/about" Icon={FaCircleInfo}></MenuItem>
      </div>

      <div className="flex items-center gap-4">
        <DarkModeSwitch />
        <Link href={"/"} className="flex items-center gap-1">
          <span className="text-2xl font-bold bg-amber-500 rounded-lg py-1 px-2">
            IMDB
          </span>
          <span className="hidden sm:inline text-xl">Clone</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
