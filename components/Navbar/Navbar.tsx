import { Logo } from "@src/components";
import { Search } from "@src/components/Navbar";
import Link from "next/link";
import { UserControls } from "./UserControls";

const Navbar = () => {
  return (
    <header>
      <nav className="flex w-full items-center justify-between border-b-2 border-gray-400/50 bg-gray-200 px-4 py-2">
        <Link href="/">
          <div className="w-[100px]">
            <Logo
              className="cursor-pointer font-extrabold"
              textLogo="SOCIAL.me"
            />
          </div>
        </Link>
        <Search />
        <UserControls />
      </nav>
    </header>
  );
};
export default Navbar;
