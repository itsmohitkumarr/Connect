import Image from "next/image";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";

import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-4">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logoFull.svg"
          width={230}
          height={32}
          alt="Connect logo"
          className="hidden lg:block max-sm:size-10"
        />
        <Image
          src="/icons/logo.svg"
          width={230}
          height={32}
          alt="Connect logo"
          className="lg:hidden max-sm:size-10"
        />
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
