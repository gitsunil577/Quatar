import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Startup Founder",
    image: "/sf.svg",
    description:
      "Launch your own startup from day one, armed with 100 validated practical tasks and a proven framework to build a successful business.",
  },
  {
    title: "Co-Founder & Partner",
    image: "/cfp.svg",
    description:
      "Join forces with entrepreneurs as an equal co-founder, bringing structured methodology and certified startup skills to the table.",
  },
  {
    title: "Startup Ecosystem Adviser",
    image: "/se.svg",
    description:
      "Advise early-stage startups and entrepreneurship hubs, guiding new founders through the same proven steps.",
  },
  {
    title: "Director of a University",
    image: "/du.svg",
    description:
      "Lead campus venture labs and design experiential programs that ship real startups and innovation projects.",
  },
  {
    title: "International Consultant",
    image: "/ic.svg",
    description:
      "Work with global bodies like the World Bank, UNDP, or GIZ supporting entrepreneurship initiatives.",
  },
  {
    title: "Incubator Manager",
    image: "/im.svg",
    description:
      "Manage incubators or accelerators, selecting and supporting high-potential startups through structured programs.",
  },
  {
    title: "Capital Analyst or Investment",
    image: "/cai.svg",
    description:
      "Evaluate startup pitches and investment opportunities using your deep understanding of startup success.",
  },
  {
    title: "Innovation Manager",
    image: "/innovation.svg",
    description:
      "Drive innovation inside corporations by building startup labs and intrapreneurship programs.",
  },
  {
    title: "Trainer & Educator",
    image: "/te.svg",
    description:
      "Deliver entrepreneurship workshops, online courses, and training programs for organizations.",
  },
  {
    title: "Policy Advisor",
    image: "/pa.svg",
    description:
      "Shape national policies and strategies that foster startup growth and innovation ecosystems.",
  },
  {
    title: "Social Entrepreneur",
    image: "/se.svg",
    description:
      "Apply startup thinking to social challenges by founding impact-driven ventures for communities.",
  },
  {
    title: "Digital Nomad",
    image: "/digital_nomad.svg",
    description:
      "Build location-independent digital businesses or offer consulting services worldwide.",
  },
];

export default function Services() {
  return (
    <section className="
    w-full
    bg-[#FFFFFF]

    pt-[60px]
    sm:pt-[80px]

    pb-[60px]
    sm:pb-[80px]
    max-w-[1460px]
    mx-auto
    px-4
    sm:px-6
    lg:px-8
  ">

      {/* Heading */}
      <div className="flex flex-col items-center mb-12 px-4 sm:mb-16 w-full max-w-[1200px] h-[120px]  mx-auto gap-6 sm:gap-8">

        {/* Badge */}
        <div className="max-w-[700px] h-[120px]">
          <div className="flex items-center px-45">
        <button 
          className="
            px-4 mt-2
            rounded-full
            border border-[#E7D9B9]
            
            bg-white
            text-[#5F554B]
            text-sm font-semibold
            font-bricolage
            h-[33px]
            w-[90px]
          "
        >
          Services
        </button>
        </div>

        {/* Main Heading */}
        
        <div className="max-w-[700px] h-[63px] mt-3 ">
        <h1
          className="
            text-[20px]
            font-[Helvetica]
            sm:text-[30px]
            md:text-[40px]
            font-bold
            text-[#0F2742]
            text-center
          "
        >
          The Programs We Serve
        </h1>
        </div>
      </div>
      </div>

      {/* Cards Grid */}
<div
  className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3

    gap-x-6
    gap-y-8

    w-full
    max-w-[1300px]
    h-[2200px]

    mx-auto

    px-4
    sm:px-6
    lg:px-2

    justify-items-center
  "
>
  {services.map((service, index) => (
    <div
      key={index}
      className="
        relative
        w-full
        max-w-[360px]
        h-[510px]

        rounded-[36px]
        overflow-hidden

        transition-all
        duration-300
      "
    >
      {/* Frame Background */}
      <Image
        src={index % 2 === 0 ? "/Frame1.png" : "/Frame2.png"}
        alt=""
        fill
        className="object-cover"
        priority={index < 3}
      />

      {/* Card Content */}
      <div
        className="
          relative
          z-10

          flex
          flex-col
          items-center
          justify-between

          h-full
          w-full

          px-6
          py-10
          
        "
      >
        {/* Top Content */}
        <div
          className="
            flex
            flex-col
            items-center
        h-[450px]

            w-full

            gap-6
          "
        >
          {/* Title */}
          <h2
            className="
              text-[28px]
              sm:text-[30px]

              leading-[1.1]

              font-bold
              font-bricolage

              text-center
              text-[#23272F]

              max-w-[300px]
            "
          >
            {service.title}
          </h2>

          {/* Image */}
          <div
            className="
              flex
              items-center
              justify-center

              w-full
              h-[250px]
            "
          >
            <Image
              src={service.image}
              alt={service.title}
              width={300}
              height={300}
              className="
                object-contain

                w-[180px]
                h-[180px]

                sm:w-[220px]
                sm:h-[220px]
              "
            />
          </div>
          <div className="py-1">
            {/* Description */}
        <p
          className={`
            text-[16px]
            sm:text-[15px]
            lg:text-[17.5px]
            text-left
            leading-[1.2]

            font-sfpro
            font-normal

            

            ${
              index % 2 === 0
                ? "text-[#2E3138]"
                : "text-[#512505]"
            }
          `}
        >
          {service.description}
        </p>


          </div>
        
          
        </div>

        
      </div>
    </div>
  ))}
</div>

      {/* Bottom Buttons */}
      <div className="flex flex-wrap max-w-[1300px] mx-auto items-center justify-center gap-5 mt-16">

        {/* Learn More */}
        <button
          className="
            h-[52px]
            w-[170px]
            px-2
            rounded-[14px]
            border
            border-[#3B2A1F]
            border-[2px]
            bg-white
            text-[#3B2A1F]
            font-sfpro
            
            font-semibold
            text-[16px]
            transition-all
            duration-300
            hover:bg-[#f5f5f5]
          "
        >
          Wanna Know More
        </button>

        {/* Get Started */}
        <button
          className="
            h-[52px]
            w-[140px]
            px-1
            rounded-[14px]
            border-[5px]
           border-[#6C4F3C]
           border-b-[#2D1017]/80
            bg-gradient-to-t
            from-[#2D2017]
            to-[#2D2017]
            text-white
            text-[16px]
            font-medium
            font-sfpro
            flex
            items-center
            justify-center
            gap-2
            transition-all
            duration-300
            hover:border-[#FFBA6F]
            hover:border-t-[#FFBA6F]/70
            hover:from-[#e3874a]
            hover:to-orange-300
          "
        >
           ✦ Get Started
        </button>
      </div>

      {/* Newsletter Section */}
      <div className="max-w-[1300px] mx-auto mt-24 rounded-[32px] bg-[#FFFFFF] px-8 py-8 sm:px-10 lg:px-12 flex flex-col
          lg:flex-row
          items-start
          lg:items-center
          justify-between
          gap-8
        "
      >

        {/* Left Content */}
        <div className="flex flex-col gap-4">

          <h2
            className="
              text-[32px]
              md:text-[40px]
              lg:text-[25px]
              font-bold
              font-inter
              leading-[1.1]
              text-[#1E293B]
            "
          >
            Join 2,000+ subscribers
          </h2>

          <p
            className="
              text-[16px]
              font-inter
              text-[#64748B]
            "
          >
            Stay in the loop with everything you need to know.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-4 w-full lg:w-auto">

          {/* Input + Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 ">

            {/* Input */}
            <div
              className="
                w-full
                sm:w-[340px]
                h-[43px]
                lg:w-[300px]
                rounded-[12px]
                border
                gap-4
                border-[#D6D6D6]
                bg-white
                px-4
                flex
                items-center
               
              "
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  h-[60px]
                  bg-transparent
                  font-inter
                  font-normal
                  outline-none
                  text-[14px]
                  text-[#475569]
                  placeholder:text-[#94A3B8]
                "
              />
            </div>

            {/* Subscribe Button */}
            <button
              className="
                h-[52px]
                px-6
                rounded-[12px]
                border-[4px]
               border-[#6C4F3C]
                    border-b-[#2D1017]/80
                    bg-gradient-to-t
                    from-[#2D2017]
                    to-[#2D2017]
                text-white
                text-[14px]
                font-medium
                font-sfpro
                flex
                items-center
                justify-center
                gap-2
                transition-all
                duration-300
                hover:border-[#FFBA6F]
                    hover:border-t-[#FFBA6F]/70
                    hover:from-[#e3874a]
                    hover:to-orange-300
              "
            >
              ✦ Subscribe
            </button>
          </div>

          {/* Privacy Policy */}
          <p className="text-[12px] text-[#64748B] font-inter">
            We care about your data in our{" "}
            <Link
              href="#privacy"
              className="underline text-[#475569] font-inter"
            >
              privacy policy
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}