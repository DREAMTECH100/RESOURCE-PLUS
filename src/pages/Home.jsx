import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCheck,
  FiShield,
  FiTarget,
  FiTool,
  FiZap,
} from "react-icons/fi";
import { Link } from "react-router-dom";

function FadeIn({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const services = [
  {
    number: "01",
    title: "Lightning Protection & Earthing",
    text:
      "Engineered lightning protection, earthing and grounding systems, surge protection, Cadweld connections, testing and commissioning.",
    image:
      "https://www.dehn-africa.com/sites/default/files/styles/2_1_ratio_2880_x_1440/public/marcom/HVI-light-plus-819600-2880x1440_0.jpg?itok=2lSzOpuW",
  },
  {
    number: "02",
    title: "Construction & Real Estate",
    text:
      "From site stabilisation and civil works to luxury residential developments, commercial buildings and end-to-end project management.",
    image:
      "https://images.nigeriapropertycentre.com/properties/images/thumbs/2787920/067e39419c9014-luxury-built-8-bedroom-duplex-with-private-pool-detached-duplexes-for-sale-asokoro-district-abuja.jpg",
  },
  {
    number: "03",
    title: "Telecommunications Infrastructure",
    text:
      "BTS build-out and commissioning, site acquisition, mast and tower projects, cabling, server rooms and data centre infrastructure.",
    image:
      "https://ocdn.eu/images/pulscms/MjE7MDA_/99f6acf954182f7f0d262b77f21d08fa.jpg",
  },
  {
    number: "04",
    title: "Power & Civil Engineering",
    text:
      "Power substations, MV/LV electrical installations, civil and structural engineering and mechanical services.",
    image:
      "https://fgnpowerco.ng/wp-content/uploads/2023/05/7-scaled.jpeg",
  },
];

const strengths = [
  {
    icon: FiTarget,
    title: "Precision",
    text:
      "Engineered accuracy in every calculation, audit, installation and project decision.",
  },
  {
    icon: FiShield,
    title: "Safety First",
    text:
      "An unyielding dedication to human life, operational security and safe project delivery.",
  },
  {
    icon: FiTool,
    title: "Technical Excellence",
    text:
      "Robust engineering solutions designed for demanding industrial and environmental conditions.",
  },
  {
    icon: FiZap,
    title: "Local Capability",
    text:
      "Growing indigenous capacity while connecting Nigerian delivery with international engineering expertise.",
  },
];

function Home() {
  return (
    <>
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative min-h-[780px] overflow-hidden bg-[#063B66]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://jammosconstruct.com/Asset/images/optimized/telecommunication.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/10" />

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6,59,102,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(6,59,102,0.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative mx-auto flex min-h-[780px] max-w-7xl items-center px-6 pb-20 pt-32 lg:px-10">
          <div className="max-w-4xl">
            <FadeIn>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#19A7E0]" />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#19A7E0]">
                  Resource Plus Limited · Since 1996
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-5xl font-black leading-[0.96] tracking-[-0.055em] text-[#063B66] sm:text-6xl lg:text-7xl">
                Engineering
                <span className="block text-[#19A7E0]">
                  Excellence.
                </span>
                <span className="block">Delivered.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#607D94]">
                A wholly indigenous Nigerian engineering, construction and
                technical services company delivering high-quality
                infrastructure solutions across multiple sectors.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="group flex items-center gap-3 rounded-sm bg-[#063B66] px-6 py-4 text-xs font-bold uppercase tracking-[0.13em] text-white transition-all hover:bg-[#19A7E0]"
                >
                  Explore Our Services

                  <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>

                <Link
                  to="/projects"
                  className="flex items-center gap-3 rounded-sm border border-[#063B66]/20 bg-white/80 px-6 py-4 text-xs font-bold uppercase tracking-[0.13em] text-[#063B66] backdrop-blur-sm transition-all hover:border-[#19A7E0] hover:text-[#19A7E0]"
                >
                  View Projects
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-2 w-1/3 bg-[#19A7E0]" />
        <div className="absolute bottom-0 right-0 h-2 w-2/3 bg-[#063B66]" />
      </section>

      {/* =========================================================
          STATS
      ========================================================== */}
      <section className="relative overflow-hidden border-y border-slate-100 bg-[#F4F9FC]">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#19A7E0]/5 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-16">
          <div className="grid grid-cols-2 divide-x divide-slate-200 md:grid-cols-3 lg:grid-cols-5">
            {[
              ["30+", "Years of Engineering Excellence"],
              ["50+", "Major Projects"],
              ["0%", "Safety Incidents"],
              ["10+", "Engineering & Technical Staff"],
              ["10+", "Strategic Alliance Members"],
            ].map(([value, label], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`px-5 py-4 ${
                  index === 4 ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#19A7E0]" />

                  <div>
                    <div className="text-4xl font-black tracking-[-0.04em] text-[#063B66] sm:text-5xl">
                      {value}
                    </div>

                    <div className="mt-2 max-w-[150px] text-[10px] font-bold uppercase leading-5 tracking-[0.12em] text-slate-400">
                      {label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 1 — WHO WE ARE
      ========================================================== */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
          <FadeIn>
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#19A7E0]" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                  Who We Are
                </span>
              </div>

              <h2 className="max-w-xl text-4xl font-black leading-tight tracking-[-0.04em] text-[#063B66] sm:text-5xl">
                Three decades of
                <span className="block text-[#19A7E0]">
                  engineering capability.
                </span>
              </h2>

              <p className="mt-7 text-base leading-8 text-[#607D94]">
                Established in 1996, Resource Plus Limited is a wholly
                indigenous engineering, construction and technical services
                company dedicated to delivering high-quality infrastructure
                and engineering solutions.
              </p>

              <p className="mt-5 text-base leading-8 text-[#607D94]">
                Our professionals bring expertise across construction, civil
                and electrical engineering, telecommunications, oil & gas and
                related sectors. We provide end-to-end solutions from project
                planning and design through construction, installation,
                commissioning and maintenance.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="border-l-2 border-[#19A7E0] pl-4">
                  <div className="text-2xl font-black text-[#063B66]">
                    1996
                  </div>

                  <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.13em] text-slate-400">
                    Established
                  </div>
                </div>

                <div className="border-l-2 border-[#19A7E0] pl-4">
                  <div className="text-2xl font-black text-[#063B66]">
                    100%
                  </div>

                  <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.13em] text-slate-400">
                    Indigenous
                  </div>
                </div>

                <div className="border-l-2 border-[#19A7E0] pl-4">
                  <div className="text-2xl font-black text-[#063B66]">
                    ₦150M+
                  </div>

                  <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.13em] text-slate-400">
                    Annual Turnover
                  </div>
                </div>
              </div>

              <Link
                to="/about"
                className="group mt-9 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#063B66]"
              >
                More About Resource Plus

                <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="relative">
              <div className="absolute -left-5 -top-5 h-24 w-24 border-l-2 border-t-2 border-[#19A7E0]" />

              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden"
              >
                <img
                  src="rpl2.png"
                  alt="Engineering and construction professionals"
                  className="h-[520px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#063B66]/75 via-transparent to-transparent" />

                <div className="absolute bottom-8 left-8">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                    Resource Plus Limited
                  </div>

                  <div className="mt-2 text-2xl font-black text-white">
                    Built on expertise.
                  </div>

                  <div className="mt-1 text-sm text-white/60">
                    Driven by integrity.
                  </div>
                </div>
              </motion.div>

              <div className="absolute -bottom-5 -right-5 h-24 w-24 border-b-2 border-r-2 border-[#063B66]" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =========================================================
          SECTION 2 — CORE SERVICES
      ========================================================== */}
      <section className="bg-[#F4F9FC] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn>
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#19A7E0]" />

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                    What We Do
                  </span>
                </div>

                <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-[#063B66] sm:text-5xl">
                  Engineering solutions across
                  <span className="block text-[#19A7E0]">
                    multiple disciplines.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl leading-8 text-[#607D94]">
                  Our capabilities span four core practice areas, supported by
                  technical expertise, strategic alliances and an
                  end-to-end approach to project delivery.
                </p>
              </div>

              <Link
                to="/services"
                className="group flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#063B66]"
              >
                View All Services

                <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <FadeIn key={service.number} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="group relative min-h-[440px] overflow-hidden bg-[#063B66]"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#063B66] via-[#063B66]/55 to-transparent" />

                  <div className="relative flex min-h-[440px] flex-col justify-end p-8 lg:p-10">
                    <div className="flex items-center justify-between">
                      <div className="h-1 w-12 bg-[#19A7E0] transition-all duration-300 group-hover:w-20" />

                      <span className="text-sm font-black text-white/30">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="mt-5 max-w-lg text-2xl font-black text-white lg:text-3xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-white/65">
                      {service.text}
                    </p>

                    <Link
                      to="/services"
                      className="mt-7 flex w-fit items-center gap-2 text-[10px] font-bold uppercase tracking-[0.17em] text-[#19A7E0]"
                    >
                      Explore Capability

                      <FiArrowUpRight />
                    </Link>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3 — WHY RESOURCE PLUS
      ========================================================== */}
      <section className="bg-[#063B66] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <FadeIn>
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#19A7E0]" />

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                    Why Resource Plus
                  </span>
                </div>

                <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                  Professionalism,
                  <span className="block text-[#19A7E0]">
                    integrity & excellence.
                  </span>
                </h2>

                <p className="mt-7 leading-8 text-white/60">
                  Resource Plus was built around a professional approach to
                  work, strong engineering resources and the ability to meet
                  client requirements within cost, time and quality.
                </p>

                <p className="mt-5 leading-8 text-white/60">
                  Our objective is to bring cost-effective, quality engineering
                  products and services to Nigeria while maximising local
                  content and maintaining high safety and quality standards.
                </p>

                <Link
                  to="/about"
                  className="group mt-9 inline-flex items-center gap-3 border border-white/20 px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all hover:border-[#19A7E0] hover:bg-[#19A7E0]"
                >
                  Discover Our Approach

                  <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </FadeIn>

            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {strengths.map((item, index) => {
                const Icon = item.icon;

                return (
                  <FadeIn key={item.title} delay={index * 0.08}>
                    <motion.div
                      whileHover={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                      className="group h-full bg-[#063B66] p-8 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex h-12 w-12 items-center justify-center bg-[#19A7E0]/10 text-[#19A7E0]">
                          <Icon size={22} />
                        </div>

                        <span className="text-xs font-black text-white/15">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="mt-9 text-xl font-black text-white">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-white/50">
                        {item.text}
                      </p>

                      <div className="mt-7 h-px w-8 bg-[#19A7E0] transition-all duration-300 group-hover:w-14" />
                    </motion.div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOME CTA
      ========================================================== */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn>
            <div className="relative overflow-hidden bg-[#F4F9FC] px-8 py-16 lg:px-16 lg:py-20">
              <div className="absolute right-0 top-0 h-full w-1/3 bg-[#19A7E0]/5" />

              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#063B66]/10" />

              <div className="relative max-w-4xl">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#19A7E0]" />

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                    Start a Conversation
                  </span>
                </div>

                <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-[#063B66] sm:text-5xl lg:text-6xl">
                  Building the future
                  <span className="block text-[#19A7E0]">
                    through engineering.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl leading-8 text-[#607D94]">
                  Talk to Resource Plus about your next engineering,
                  construction, infrastructure or technical requirement.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="group flex items-center gap-3 bg-[#063B66] px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all hover:bg-[#19A7E0]"
                  >
                    Discuss Your Project

                    <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>

                  <Link
                    to="/projects"
                    className="flex items-center gap-3 border border-[#063B66]/15 px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#063B66] transition-all hover:border-[#19A7E0] hover:text-[#19A7E0]"
                  >
                    See Our Track Record
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

export default Home;