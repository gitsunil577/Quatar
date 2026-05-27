'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home", icon: "/Vector.svg" },
    { href: "#about", label: "About Us", icon: "/Frame.svg" },
    { href: "#mentors", label: "Mentors", icon: "/Frame.svg" },
    { href: "#curriculum", label: "Curriculum", icon: "/Frame.svg" },
  ];

  return (
    <nav className="w-full bg-[#F7F7F7] py-3 relative z-50">

      {/* Main Container */}
      <div
        className="
          max-w-[1440px]
          mx-auto
          px-4
          sm:px-6
          lg:px-6
          flex
          items-center
          justify-between
          h-[54px]
        "
      >

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/Logo.png"
            width={44}
            height={44}
            alt="Website Logo"
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="
                flex items-center gap-1
                text-[16px] font-light leading-[100%] tracking-[0.01em]
                text-[#4B4B4B] transition-all whitespace-nowrap
              "
            >
              {link.label}
              <Image src={link.icon} width={12} height={12} alt="" />
            </Link>
          ))}

          <button
            className="
              flex items-center gap-1
              px-3 py-1 rounded-[8px]
              bg-white border border-[#E5E5E5] shadow-sm
              text-[16px] font-light leading-[100%] tracking-[0.01em]
              text-[#F97316] hover:shadow-md transition-all duration-300 whitespace-nowrap
            "
          >
            Collaboration
            <Image src="/Frame.svg" width={12} height={12} alt="" />
          </button>

          <Link href="#silicon-oasis" className="text-[16px] font-light text-[#4B4B4B] whitespace-nowrap">
            Silicon Oasis
          </Link>

          <Link href="#csr" className="text-[16px] font-light text-[#4B4B4B] whitespace-nowrap">
            CSR
          </Link>

          <Link href="#ai" className="text-[16px] font-light text-[#4B4B4B] whitespace-nowrap">
            AI
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 shrink-0">

          {/* Login — hidden on small mobile */}
          <Button
            variant="outline"
            className="
              hidden sm:flex
              h-[46px] px-5
              rounded-[14px] border-[2px] border-black
              bg-white text-[16px] text-[#2C2014] font-semibold
              hover:bg-gray-100 transition-all
            "
          >
            Log in
          </Button>

          {/* Sign Up */}
          <Button
            className="
              h-[46px] px-5
              rounded-[14px] border-[3px] border-[#6C4F3C]
              bg-gradient-to-b from-[#655042] to-[#2D1017]
              text-white text-[15px] font-semibold
              hover:border-orange-200
              hover:from-orange-400
              hover:to-orange-300
            "
          >
            Sign up
          </Button>

          {/* Hamburger — visible below lg */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
            aria-label="Toggle menu"
          >
            <span className={`block h-[2px] w-6 bg-[#4B4B4B] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-[2px] w-6 bg-[#4B4B4B] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] w-6 bg-[#4B4B4B] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#F7F7F7] border-t border-[#E5E5E5] shadow-lg px-4 py-6 flex flex-col gap-4">

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-1 text-[16px] font-light text-[#4B4B4B] py-1"
            >
              {link.label}
              <Image src={link.icon} width={12} height={12} alt="" />
            </Link>
          ))}

          <button className="flex items-center gap-1 w-fit px-3 py-1 rounded-[8px] bg-white border border-[#E5E5E5] text-[16px] font-light text-[#F97316]">
            Collaboration
            <Image src="/Frame.svg" width={12} height={12} alt="" />
          </button>

          <Link href="#silicon-oasis" onClick={() => setMenuOpen(false)} className="text-[16px] font-light text-[#4B4B4B] py-1">Silicon Oasis</Link>
          <Link href="#csr" onClick={() => setMenuOpen(false)} className="text-[16px] font-light text-[#4B4B4B] py-1">CSR</Link>
          <Link href="#ai" onClick={() => setMenuOpen(false)} className="text-[16px] font-light text-[#4B4B4B] py-1">AI</Link>

          {/* Login in mobile */}
          <Button
            variant="outline"
            className="sm:hidden w-full h-[46px] rounded-[14px] border-[2px] border-black bg-white text-[16px] text-[#2C2014] font-semibold mt-2"
          >
            Log in
          </Button>
        </div>
      )}
    </nav>
  );
}
