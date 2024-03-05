"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavBar } from "./NavBar";
import logo from "@/../public/assets/svg/LearnifyAcademy-Logo.svg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Hamburger } from "./Hamburger";
import { Drawer } from "./Drawer";
import { Typography } from "@/components/Typography";
import { FaWhatsapp } from "react-icons/fa6";
import { ProfileCard } from "./ProfileCard";

export const Header: React.FC = () => {
  const [top, setTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const user = {
    email: "",
  };
  return (
    <>
      <header
        className={cn("px-4 py-4 z-50 md:px-12 top-0 sticky bg-white", {
          "header-shadow": !top,
        })}
      >
        <div className="flex container px-0 justify-between items-center">
          <Link href={"/"}>
            <Typography variant="subheading" className="font-extrabold">
              LOGO
            </Typography>
          </Link>
          <NavBar />
          <div className="flex-center gap-x-2">
            {user?.email ? (
              <ProfileCard user={user} />
            ) : (
              <div className="flex-between md:gap-x-4">
                <Link href="/signin">
                  <Button
                    className="hidden md:inline-block"
                    size={"lg"}
                    variant={"outline"}
                  >
                    Signin
                  </Button>
                </Link>
                <Button
                  className="hidden md:inline-block"
                  size={"lg"}
                  variant={"default"}
                >
                  Signup
                </Button>
              </div>
            )}

            <button
              onClick={toggleBurgerMenu}
              className="relative group md:hidden inline-block"
            >
              <Hamburger isMenuOpen={isMenuOpen} />
            </button>
          </div>
        </div>
      </header>
      <Drawer isMenuOpen={isMenuOpen} />
    </>
  );
};
