// Imports
import Link from "next/link";
import classNames from "classnames";
import { type INavLinkProps } from "./Navbar.types";

// Functions
const Navbar = () => (
  <nav className="page-width flex items-center justify-between py-8">
    <section>
      <Link href="/">
        <h3 className="font-bold text-[#F8F9FA]">
          JOERI BREEDVELD<span className="text-[#DDBEA9]">.</span>
        </h3>
      </Link>
    </section>
    <section className="hidden md:block">
      <ul className="flex gap-8">
        <NavLink href="#hero" isActive>
          Home
        </NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#education">Education</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </ul>
    </section>
  </nav>
);

const NavLink = ({ href, children, isActive }: INavLinkProps) => (
  <Link
    href={href}
    className={classNames("text-xs font-medium text-[#F8F9FA]", {
      "border-b-2 border-[#DDBEA9]": isActive,
      "opacity-50": !isActive,
    })}
  >
    {children}
  </Link>
);

// Exports
export default Navbar;
