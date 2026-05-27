import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Startup Founder",
    image: "/statup_founder.png",
    description:
      "Launch your own startup from day one, armed with 100 validated practical tasks and a proven framework to build a successful business.",
  },
  {
    title: "Co-Founder & Partner",
    image: "/co_partner.png",
    description:
      "Join forces with entrepreneurs as an equal co-founder, bringing structured methodology and certified startup skills to the table.",
  },
  {
    title: "Startup Ecosystem Adviser",
    image: "/statup_ecosystem.png",
    description:
      "Advise early-stage startups and entrepreneurship hubs, guiding new founders through the same proven steps.",
  },
  {
    title: "Director of a University",
    image: "/Director.png",
    description:
      "Lead campus venture labs and design experiential programs that ship real startups and innovation projects.",
  },
  {
    title: "International Consultant",
    image: "/international_consultant.png",
    description:
      "Work with global bodies like the World Bank, UNDP, or GIZ supporting entrepreneurship initiatives.",
  },
  {
    title: "Incubator Manager",
    image: "/incuburator.png",
    description:
      "Manage incubators or accelerators, selecting and supporting high-potential startups through structured programs.",
  },
  {
    title: "Capital Analyst or Investment",
    image: "/capital_analyst.png",
    description:
      "Evaluate startup pitches and investment opportunities using your deep understanding of startup success.",
  },
  {
    title: "Innovation Manager",
    image: "/innovation_mgr.png",
    description:
      "Drive innovation inside corporations by building startup labs and intrapreneurship programs.",
  },
  {
    title: "Trainer & Educator",
    image: "/Trainer.png",
    description:
      "Deliver entrepreneurship workshops, online courses, and training programs for organizations.",
  },
  {
    title: "Policy Advisor",
    image: "/policy_advisor.png",
    description:
      "Shape national policies and strategies that foster startup growth and innovation ecosystems.",
  },
  {
    title: "Social Entrepreneur",
    image: "/social_entre.png",
    description:
      "Apply startup thinking to social challenges by founding impact-driven ventures for communities.",
  },
  {
    title: "Digital Nomad",
    image: "/Digital_nomad.png",
    description:
      "Build location-independent digital businesses or offer consulting services worldwide.",
  },
];

export default function Services() {
  return (
    <section className="bg-[#FFFFFF] pt-[60px] sm:pt-[80px] pb-[60px] sm:pb-[80px] px-4 sm:px-6 lg:px-10 w-full">

      {/* Heading */}
      <div className="flex flex-col items-center mb-12 sm:mb-16 w-full max-w-[1440px] mx-auto gap-6 sm:gap-8">

        {/* Badge */}
        <button
          className="
            px-4 py-1.5
            rounded-full
            border border-[#E7D9B9]
            bg-white
            text-[#5F554B]
            text-sm font-medium
          "
        >
          Services
        </button>

        {/* Main Heading */}
        <h1
          className="
            mt-5
            text-3xl
            font-[Helvetica]
            sm:text-4xl
            md:text-5xl
            font-bold
            text-[#0F2742]
            text-center
          "
        >
          The Programs We Serve
        </h1>
      </div>

      {/* Cards Grid */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
          max-w-[1440px]
          mx-auto
          place-items-center
        "
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="
              relative
              w-full
              max-w-[410px]
              h-[620px]
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
            <div className="relative z-10 flex flex-col items-center justify-between h-full px-8.5 py-11 gap-2.5">

              {/* Top Content */}
              <div className="flex flex-col items-center w-[343px] h-[496px] gap-8.5">

                {/* Title */}
                <h2
                  className="
                    text-[42px]
                    leading-[1.1]
                    font-bold
                    font-bricolage
                    text-center
                    text-[#23272F]
                    max-w-[300px]
                    min-h-[100px]
                    flex
                    items-center
                    justify-center
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
                    mt-10
                    mb-10
                    w-[223px]
                    h-[250px]
                  "
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={260}
                    height={260}
                    className="
                      object-contain
                      w-[220px]
                      h-[220px]
                      md:w-[250px]
                      md:h-[250px]
                    "
                  />
                </div>
              </div>

              {/* Description */}
              <p
                className={`
                  text-[18px]
                  leading-[100%]
                  font-sfpro
                  tracking-[0%]
                  text-center
                  font-normal
                  ${index % 2 === 0 ? "text-[#2E3138]" : "text-[#512505]"}
                `}
              >
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-5 mt-16">

        {/* Learn More */}
        <button
          className="
            h-[56px]
            px-8
            rounded-[14px]
            border
            border-[#3B2A1F]
            bg-white
            text-[#3B2A1F]
            font-medium
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
            h-[56px]
            px-8
            rounded-[14px]
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
            gap-2
            transition-all
            duration-300
            hover:border-orange-200
            hover:from-orange-400
            hover:to-orange-300
          "
        >
          ✨ Get Started
        </button>
      </div>

      {/* Newsletter Section */}
      <div className="max-w-[1440px] mx-auto mt-24 rounded-[32px] bg-[#FFFFFF] px-8 py-8 sm:px-10 lg:px-12 flex flex-col
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
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">

            {/* Input */}
            <div
              className="
                w-full
                sm:w-[340px]
                h-[52px]
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
                  w-full
                  bg-transparent
                  font-inter
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
                bg-gradient-to-b
                from-[#4B3425]
                to-[#2B1C14]
                text-white
                text-[14px]
                font-medium
                flex
                items-center
                justify-center
                gap-2
                transition-all
                duration-300
                hover:border-orange-200
                hover:from-orange-400
                hover:to-orange-300
              "
            >
              ✨ Subscribe
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