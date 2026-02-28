import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-[78px] flex items-center justify-between px-[124px] bg-background border-b border-border">
      {/* Navigation Links */}
      <div className="flex items-center gap-[48px]">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="QuickHire Logo"
            width={152}
            height={36}
            priority
          />
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/jobs"
            className="font-epilogue font-medium text-base leading-[160%] text-foreground hover:text-primary transition-colors "
          >
            Find Jobs
          </Link>
          <Link
            href="/companies"
            className="font-epilogue font-medium text-base leading-[160%] text-foreground hover:text-primary transition-colors"
          >
            Browse Companies
          </Link>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-[0px]">
        <button className="w-[92px] h-[50px] px-6 py-3  text-primary font-epilogue font-[700] text-base leading-[160%] hover:bg-primary hover:text-primary-foreground transition-colors opacity-100 border">
          Login
        </button>
        <div className="w-[32px] h-full border-t border-[#D6DDEB]  rotate-[-90deg]"></div>
        <button className="w-[108px] h-[50px] px-6 py-3  bg-primary text-primary-foreground font-epilogue font-medium text-base leading-[160%] hover:opacity-90 transition-opacity">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
