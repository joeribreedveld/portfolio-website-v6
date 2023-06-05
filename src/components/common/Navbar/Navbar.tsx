// Imports
import Link from "next/link";
import classNames from "classnames";
import { type INavLinkProps } from "./Navbar.types";
import { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import { Link as Scroll } from "react-scroll";

// Functions
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const isScrolled = window.scrollY > 100;
    setIsScrolled(isScrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={classNames(
        "fixed w-full transition duration-300 ease-in-out",
        {
          "bg-[#212529]": isScrolled,
          "bg-[#212529] bg-opacity-95 md:bg-opacity-100": isMenuOpen,
        }
      )}
    >
      <div className="page-width flex flex-col items-center justify-between py-6 sm:flex-row md:py-8">
        <div className="flex w-full items-center justify-between">
          <section>
            <Link href="/">
              <h3 className="font-bold text-[#F8F9FA]">
                JOERI BREEDVELD<span className="text-[#DDBEA9]">.</span>
              </h3>
            </Link>
          </section>
          <section className="flex items-center md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <BiMenu className="text-3xl text-[#F8F9FA]" />
            </button>
          </section>
        </div>
        <section
          className={classNames(
            "flex h-[90vh] flex-col justify-center md:block md:h-fit",
            {
              hidden: !isMenuOpen,
            }
          )}
        >
          <ul className="flex flex-col gap-4 md:flex-row md:gap-8">
            <NavLink setIsMenuOpen={setIsMenuOpen} href="hero" isActive>
              Home
            </NavLink>
            <NavLink setIsMenuOpen={setIsMenuOpen} href="projects">
              Projects
            </NavLink>
            <NavLink setIsMenuOpen={setIsMenuOpen} href="about">
              About
            </NavLink>
            <NavLink setIsMenuOpen={setIsMenuOpen} href="education">
              Experience
            </NavLink>
            <NavLink setIsMenuOpen={setIsMenuOpen} href="contact">
              Contact
            </NavLink>
            <NavLink setIsMenuOpen={setIsMenuOpen} href="services">
              Services
            </NavLink>
          </ul>
        </section>
      </div>
    </nav>
  );
};

const NavLink = ({
  href,
  children,
  isActive,
  setIsMenuOpen,
}: INavLinkProps) => (
  <Scroll
    to={href}
    smooth={true}
    duration={500}
    onClick={() => setIsMenuOpen(false)}
    className={classNames(
      "p-4 px-8 text-center text-xs font-medium text-[#F8F9FA] hover:cursor-pointer md:p-0 md:text-left",
      {
        "border-b-2 border-[#DDBEA9]": isActive,
        "opacity-50": !isActive,
      }
    )}
  >
    {children}
  </Scroll>
);

// Exports
export default Navbar;
