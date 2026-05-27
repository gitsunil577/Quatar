import Image from "next/image";
import { Button } from "./ui/button";

function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full p-0">
        
        {/* Hero Container */}
        <div
          className="
            relative
            w-full
            h-screen
            overflow-hidden
            rounded-b-[30px]
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
              from-[#E9EEEE]/95
              via-[#E9EEEE]/60
              sm:from-[#E9EEEE]/85
              sm:via-[#E9EEEE]/35
              to-transparent
            "
          ></div>

          {/* Content */}
          <div
            className="
              relative
              z-10
              flex
              items-center
              h-full
            "
          >
            
            {/* Container */}
            <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
              
              {/* Text Content */}
              <div className="w-full max-w-[676px]">

                {/* Heading */}
                <h1
                  className="
                    font-[Helvetica]
                    font-bold
                    text-[38px]
                    sm:text-[52px]
                    md:text-[64px]
                    lg:text-[72px]
                    leading-[1.05]
                    tracking-[-0.02em]
                    text-[#312922]
                    mb-3
                    md:mb-4
                    lg:mb-5
                  "
                >
                  12 Doors Open For You
                </h1>

                {/* Paragraph */}
                <p
                  className="
                    w-full
                    font-[inter]
                    font-normal
                    text-[17px]
                    sm:text-[18px]
                    md:text-[20px]
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
                    h-[54px]
                    w-[151px]
                    gap-3
                    rounded-[14px]
                    border-[5px]
                    border-[#6C4F3C]
                    bg-gradient-to-b
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
      <section className="px-3 sm:px-5 lg:px-7 py-8">
        
        <video
          autoPlay
          loop
          muted
          controls
          className="
            w-full
            h-[260px]
            sm:h-[420px]
            lg:h-[700px]
            object-cover
            rounded-[28px]
          "
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

      </section>
    </>
  );
}

export default Hero;