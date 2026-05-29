import Image from "next/image";
import { Button } from "./ui/button";

function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full p-0 ">
        
        {/* Hero Container */}
        <div
          className="
            relative
            w-full max-w-[1390px] mx-auto px-6 sm:px-4 lg:px-10
            h-screen
            overflow-hidden
            rounded-[50px]
            bg-[#E9EEEE]
          "
        >
          
          {/* Background Image */}
          <Image
            src="/man.png"
            fill
            priority
            quality={100}
            alt="Hero Image"
            className="
              object-cover
              object-right
            "
          />

          {/* Left Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#FFFFFF]/95
              via-[#FFFFFF]/60
              sm:from-[#FFFFFF]/85
              sm:via-[#FFFFFF]/40
              to-transparent
            "
          ></div>

          {/* Content */}
          <div className="relative z-10 flex items-center h-full w-full">

            {/* Alignment container — identical to navbar:
                no padding on outer, px lives on the max-w element */}
            <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-4 lg:px-10">

              {/* Text Content */}
              <div className="w-full max-w-[676px]">

                {/* Heading */}
                <h1 className="font-[Helvetica] font-bold text-[25px] sm:text-[40px] md:text-[46px] lg:text-[52px] leading-[1.05] tracking-[-0.03em]
                            text-[#312922]
                            mb-3
                            md:mb-4
                            lg:mb-5"
              >
                12 Doors Open For You
              </h1>

                {/* Paragraph */}
                <p
                  className="
                    w-full
                    font-inter
                    font-normal
                    text-[10px]
                    sm:text-[16px]
                    md:text-[18px]
                    leading-[30px]
                    tracking-[0%]
                    text-[#475467]
                  "
                >
                  Your Startup100 MBD Certificate Unlocks a World of
                  Possibilities
                </p>

                {/* Button */}
                <Button
                  className="
                    mt-5
                    lg:mt-6
                    h-[52px]
                    w-[135px]
                    gap-3
                    rounded-[14px]
                    border-[5px]
                    border-[#6C4F3C]
                    bg-gradient-to-t
                    from-[#6C4F3C]
                    to-[#2D2017]
                    text-white
                    text-[18px]
                    font-semibold
                    shadow-[0_6px_16px_rgba(0,0,0,0.22)]
                    hover:border-orange-200
                    hover:from-orange-400
                    hover:to-orange-300
                    transition-all
                    duration-300
                  "
                >
                  ✦ Apply Now
                </Button>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-8">

        {/* Identical to navbar: px on the max-w container, not the outer section */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <video
            autoPlay
            loop
            muted
            controls
            className="
              w-full
              h-[150px]
              sm:h-[150px]
              lg:h-[500px]
              object-cover
              rounded-[40px]
            "
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>

      </section>
    </>
  );
}

export default Hero;