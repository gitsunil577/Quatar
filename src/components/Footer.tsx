import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

function Footer() {
  return (
    <footer className="bg-[#FFFFFF] px-4 sm:px-6 lg:px-10 pb-10">
      
      {/* Main Footer */}
      <div
        className="
          w-full
          max-w-[1640px]
          min-h-[557px]
          mx-auto
          rounded-[40px]
          lg:rounded-[54px]
          border
          border-[#1A1A1A]
          bg-[#121211]
          overflow-hidden
          px-4
          sm:px-6
          lg:px-8
          py-6
        "
      >

        {/* Inner Wrapper */}
        <div className="w-full flex flex-col gap-6">

          {/* Top Section */}
          <div
            className="
              flex
              flex-col
              xl:flex-row
              gap-6
              rounded-[26px]
              border
              border-[#1B1B1B]
              bg-[#0A0A0A]
              p-5
              sm:p-8
              lg:p-10
            "
          >

            {/* LEFT SIDE */}
            <div className="flex-1 flex flex-col w-full max-w-[620px] gap-6">

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 text-[#F59E0B] text-[13px] font-medium">
                <span>Learn</span>
                <span>•</span>
                <span>Build</span>
                <span>•</span>
                <span>Pitch</span>
                <span>•</span>
                <span>Launch</span>
              </div>

              {/* Heading + Description */}
              <div className="flex flex-col gap-4">

                <h1
                  className="
                    w-full
                    text-[38px]
                    sm:text-[52px]
                    lg:text-[64px]
                    font-normal
                    leading-[100%]
                    tracking-[-1.8px]
                    text-white
                    font-[sfpro]
                  "
                >
                  Let&apos;s Create Jobs
                </h1>

                <p
                  className="
                    text-[15px]
                    sm:text-[17px]
                    leading-[24px]
                    text-[#94A3B8]
                    max-w-[560px]
                    font-[sfpro]
                  "
                >
                  Design amazing digital experiences that create more happy in
                  the world.
                </p>
              </div>

              {/* Button */}
              <Button
                className="
                  w-fit
                  h-[42px]
                  px-4
                  rounded-[10px]
                  border-[5px]
                  border-[#6C4F3C]
                  bg-gradient-to-b
                  from-[#4B3425]
                  to-[#2B1C14]
                  text-white
                  text-[16px]
                  font-medium
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  hover:border-orange-300
                  hover:from-orange-500
                  hover:to-orange-600
                "
              >
                ✨ Get Started
              </Button>

              {/* Address */}
              <div className="flex flex-col gap-4 w-full max-w-[354px]">

                {/* Address Header */}
                <div className="border-l-[3px] border-l-[#FDA400] pl-3">

                  <div className="flex items-center justify-between gap-4 flex-wrap">

                    <h3
                      className="
                        text-[16px]
                        font-medium
                        text-white
                        font-[sfpro]
                        leading-[22px]
                      "
                    >
                      Dubai Address
                    </h3>

                    <Link
                      href="#"
                      className="
                        text-[#FDA400]
                        text-[11px]
                        font-medium
                        whitespace-nowrap
                      "
                    >
                      Check in Map →
                    </Link>
                  </div>
                </div>

                {/* Address Text */}
                <p
                  className="
                    text-[12px]
                    leading-[20px]
                    text-[#BBBBBB]
                    font-light
                    font-[sfpro]
                  "
                >
                  Yatra Online Freight Services Pvt Ltd, Gulf Adiba,
                  <br />
                  Plot No. 272, Phase II, Udyog Vihar, Sector 20,
                  <br />
                  Gurugram, Haryana 122008
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div
              className="
                flex-1
                w-full
                min-h-[334px]
                rounded-[24px]
                border
                border-[#1B1B1B]
                bg-gradient-to-br
                from-[#111111]
                via-[#0C0C0C]
                to-[#17100C]
                relative
                overflow-hidden
                p-5
                sm:p-8
              "
            >

              {/* Blur Background */}
              <div
                className="
                  absolute
                  right-0
                  bottom-0
                  pointer-events-none
                  select-none
                "
              >
                <Image
                  src="/Blur.png"
                  alt=""
                  width={400}
                  height={400}
                  className="
                    object-contain
                    w-[250px]
                    sm:w-[320px]
                    lg:w-[420px]
                    h-auto
                    opacity-60
                  "
                />
              </div>

              {/* 100 Logo */}
              <div
                className="
                  absolute
                  right-4
                  bottom-4
                  z-[1]
                  pointer-events-none
                  select-none
                "
              >
                <Image
                  src="/Group.svg"
                  alt="Startup100"
                  width={220}
                  height={220}
                  className="
                    object-contain
                    w-[140px]
                    sm:w-[180px]
                    lg:w-[240px]
                    h-auto
                  "
                />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-8 w-full">

                {/* Top Row */}
                <div
                  className="
                    flex
                    flex-col
                    md:flex-row
                    md:items-start
                    md:justify-between
                    gap-5
                  "
                >

                  <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                      Content
                    </h2>

                    <p className="text-[#71717A] text-[14px] mt-2">
                      Webdesign & Software Entwicklung
                    </p>
                  </div>

                  {/* Badge */}
                  <div
                    className="
                      w-fit
                      px-4
                      py-2
                      rounded-full
                      border
                      border-[#5A3A16]
                      bg-[#1A1208]
                      text-[#F59E0B]
                      text-[13px]
                      whitespace-nowrap
                    "
                  >
                    🔸 What are you waiting for?
                  </div>
                </div>

                {/* Links Grid */}
                <div
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-4
                    gap-x-10
                    gap-y-4
                  "
                >

                  <Link href="#" className="text-[#E4E4E7]">Home</Link>
                  <Link href="#" className="text-[#E4E4E7]">Oasis</Link>
                  <Link href="#" className="text-[#E4E4E7]">Opportunities</Link>
                  <Link href="#" className="text-[#E4E4E7]">Meet the Team</Link>

                  <Link href="#" className="text-[#E4E4E7]">About us</Link>
                  <Link href="#" className="text-[#E4E4E7]">Collaborations</Link>
                  <Link href="#" className="text-[#E4E4E7]">
                    Degree of the Accreditation
                  </Link>
                  <Link href="#" className="text-[#E4E4E7]">Registrations</Link>

                  <Link href="#" className="text-[#E4E4E7]">Mentors</Link>
                  <Link href="#" className="text-[#E4E4E7]">Find Co-founder</Link>
                  <Link href="#" className="text-[#E4E4E7]">Admissions</Link>
                  <Link href="#" className="text-[#E4E4E7]">Privacy Policy</Link>

                  <Link href="#" className="text-[#E4E4E7]">Curriculums</Link>
                  <Link href="#" className="text-[#E4E4E7]">CSR</Link>
                  <Link href="#" className="text-[#E4E4E7]">Tuition</Link>

                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className="
              flex
              flex-col
              lg:flex-row
              items-center
              justify-between
              gap-6
              border-t
              border-[#1A1A1A]
              pt-6
            "
          >

            {/* Left */}
            <div
              className="
                flex
                flex-col
                sm:flex-row
                items-center
                gap-4
                text-center
                sm:text-left
              "
            >

              <Image
                src="/Logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="object-contain"
              />

              <p className="text-[#71717A] text-[14px]">
                © 2026 • Untitled UI. All rights reserved.
              </p>
            </div>

            {/* Right */}
            <div
              className="
                flex
                flex-col
                sm:flex-row
                items-center
                gap-6
              "
            >

              <Link
                href="#"
                className="text-[#71717A] hover:text-white text-[14px]"
              >
                Privacy Policy
              </Link>

              {/* Social Icons */}
              <div className="flex items-center gap-4 text-[#71717A]">

                <Link href="#">in</Link>
                <Link href="#">f</Link>
                <Link href="#">𝕏</Link>
                <Link href="#">◎</Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;