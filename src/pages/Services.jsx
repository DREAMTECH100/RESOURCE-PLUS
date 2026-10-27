import { motion } from "framer-motion";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiCheck,
  FiChevronRight,
  FiCompass,
  FiCpu,
  FiDroplet,
  FiHome,
  FiLayers,
  FiRadio,
  FiShield,
  FiTool,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";
import { Link } from "react-router-dom";

// Local images live in /public/images
const img = (name) => encodeURI(`/images/${name}`);

const services = [
  {
    number: "01",
    title: "Lightning Protection & Earthing",
    shortTitle: "Facility Electrical Protection",
    description:
      "Engineered lightning, grounding, bonding and surge protection systems designed to protect people, buildings, equipment and critical infrastructure.",
    image: img("Installation of Lightning Protection System.jpg"),
    icon: FiZap,
    color: "#19A7E0",
    capabilities: [
      "ERITECH System 3000 installation",
      "Earthing and grounding systems",
      "CADWELD exothermic weld connections",
      "Surge and transient overvoltage protection",
      "Ground resistance testing and commissioning",
      "Technical and risk assessment consultancy",
      "Computer-assisted installation design",
      "Preventive maintenance and servicing",
    ],
  },
  {
    number: "02",
    title: "Construction & Real Estate",
    shortTitle: "Built Environment",
    description:
      "End-to-end civil construction and premium building solutions covering site development, structural works, project management and high-quality finishes.",
    // No local image yet - template kept
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=85",
    icon: FiHome,
    color: "#19A7E0",
    capabilities: [
      "Luxury residential duplexes",
      "Commercial building construction",
      "Site stabilisation and ground improvement",
      "End-to-end project management",
      "Premium architectural finishes",
      "Mechanical and electrical installations",
      "Smart home integration",
      "Turn-key construction delivery",
    ],
  },
  {
    number: "03",
    title: "Telecommunications Infrastructure",
    shortTitle: "Telecom Infrastructure",
    description:
      "Infrastructure services supporting telecommunications networks, from site development and towers to cabling, server rooms and data-centre environments.",
    image: img("NetworkTelecom Mast Installation and Maintenance.jpg"),
    icon: FiRadio,
    color: "#19A7E0",
    capabilities: [
      "BTS site build-out and commissioning",
      "Telecom site acquisition",
      "Mast and tower projects",
      "Sub-floor cabling",
      "Server room works",
      "Data-centre infrastructure",
      "Telecommunications grounding",
      "Lightning and surge protection for telecom facilities",
    ],
  },
  {
    number: "04",
    title: "Power & Civil Engineering",
    shortTitle: "Power Infrastructure",
    description:
      "Integrated civil, structural, electrical and mechanical engineering for power infrastructure and major development projects.",
    image: img("Earthing of Power Distribution Board.jpg"),
    icon: FiTrendingUp,
    color: "#19A7E0",
    capabilities: [
      "Power substation construction",
      "MV/LV electrical installations",
      "Civil and structural engineering",
      "Mechanical services",
      "Switchgear and MDB panel installation",
      "Power transmission and distribution systems",
      "Infrastructure development",
      "Training and human capital development",
    ],
  },
];

const protectionPlan = [
  {
    number: "01",
    title: "Capture",
    text: "Capture the lightning strike at a known and preferred attachment point using a purpose-designed air terminal system.",
  },
  {
    number: "02",
    title: "Convey",
    text: "Safely conduct lightning energy toward ground through a purpose-designed down-conductor.",
  },
  {
    number: "03",
    title: "Dissipate",
    text: "Dissipate the energy into a low-impedance grounding system designed for the facility.",
  },
  {
    number: "04",
    title: "Bond",
    text: "Bond ground points together to eliminate ground loops and create an equipotential plane.",
  },
  {
    number: "05",
    title: "Protect AC Power",
    text: "Protect incoming AC power feeders against damaging surges and transients.",
  },
  {
    number: "06",
    title: "Protect Data & Telecom",
    text: "Protect low-voltage data, telecommunications and signal circuits against transient damage.",
  },
];

const additionalCapabilities = [
  {
    icon: FiTool,
    title: "Oil & Gas Process Equipment",
    text:
      "Supply and deployment of specialised process equipment packages for onshore and offshore energy infrastructure, including sewage treatment units, diesel firewater pump packages, potable water pressure sets, sanitary lift stations and industrial identification solutions.",
    points: [
      "Diesel firewater pump packages",
      "Potable water pressure sets",
      "Sanitary lift stations",
      "Sewage treatment units",
      "Industrial Brady identification products",
    ],
  },
  {
    icon: FiCpu,
    title: "Technical Training & Consulting",
    text:
      "Technology transfer, technical consulting and hands-on workforce development delivered through strategic relationships with international training organisations.",
    points: [
      "Petroleum technical training",
      "Engineering skills development",
      "Human capital development",
      "Technical consulting",
      "International best-practice transfer",
    ],
  },
];

const groundingFeatures = [
  "Low-resistance grounding networks",
  "Ground rods and electrodes",
  "Ground enhancing materials",
  "CADWELD exothermic connections",
  "Ground connectors and conductors",
  "Ground pits and inspection chambers",
  "Equipotential bonding",
  "Ground resistance testing",
];

const deliveryStages = [
  {
    number: "01",
    title: "Assess",
    text: "Understand the facility, site conditions, operational requirements and engineering challenge.",
    icon: FiCompass,
  },
  {
    number: "02",
    title: "Engineer",
    text: "Develop the appropriate technical approach, design, specification and execution strategy.",
    icon: FiLayers,
  },
  {
    number: "03",
    title: "Deliver",
    text: "Procure, construct, install and commission the required systems with attention to quality and safety.",
    icon: FiTool,
  },
  {
    number: "04",
    title: "Verify",
    text: "Test, inspect, document and hand over completed systems while identifying maintenance requirements.",
    icon: FiShield,
  },
];

const sectors = [
  "Oil & Gas",
  "Telecommunications",
  "Manufacturing",
  "Power & Utilities",
  "Commercial Real Estate",
  "Residential Development",
  "Financial Institutions",
  "Government Infrastructure",
];

function FadeIn({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
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

function Services() {
  return (
    <main className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative min-h-[720px] overflow-hidden bg-[#063B66]">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={img("Installation of Signal Reference Grid for the data centre.jpg")}
            alt="Signal reference grid installation at a data centre"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#063B66] via-[#063B66]/90 to-[#063B66]/30" />

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-6 pb-20 pt-32 lg:px-10">
          <div className="max-w-4xl">
            <FadeIn>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#19A7E0]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#19A7E0]">
                  Our Services
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-5xl font-black leading-[0.97] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
                Engineering solutions.
                <span className="block text-[#19A7E0]">
                  Built for demanding environments.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
                From facility electrical protection and telecommunications
                infrastructure to construction, power and civil engineering,
                Resource Plus delivers integrated technical solutions across
                Nigeria.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#core-services"
                  className="group flex items-center gap-3 bg-[#19A7E0] px-6 py-4 text-xs font-bold uppercase tracking-[0.13em] text-white transition-all hover:bg-white hover:text-[#063B66]"
                >
                  Explore Services
                  <FiArrowDown className="transition-transform group-hover:translate-y-1" />
                </a>

                <Link
                  to="/contact"
                  className="flex items-center gap-3 border border-white/30 bg-white/5 px-6 py-4 text-xs font-bold uppercase tracking-[0.13em] text-white backdrop-blur-sm transition-all hover:border-[#19A7E0] hover:bg-[#19A7E0]"
                >
                  Discuss a Project
                  <FiArrowUpRight />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-2 w-1/3 bg-[#19A7E0]" />
        <div className="absolute bottom-0 right-0 h-2 w-2/3 bg-white/20" />
      </section>

      {/* INTRO */}
      <section className="bg-white py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-end">
            <FadeIn>
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#19A7E0]" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                    Engineering Capability
                  </span>
                </div>

                <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-[#063B66] sm:text-5xl">
                  Four core disciplines.
                  <span className="block text-[#19A7E0]">
                    One delivery standard.
                  </span>
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div>
                <p className="text-base leading-8 text-[#607D94]">
                  Resource Plus provides comprehensive Civil, Mechanical and
                  Electrical engineering solutions, combining project
                  planning, design, construction, installation, commissioning
                  and maintenance.
                </p>
                <p className="mt-5 text-base leading-8 text-[#607D94]">
                  Our capabilities are designed for clients operating in
                  energy, telecommunications, manufacturing, commercial real
                  estate and other infrastructure-intensive environments.
                </p>
              </div>
            </FadeIn>
          </div>

          <div
            id="core-services"
            className="mt-16 grid gap-px bg-slate-200 md:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <FadeIn key={service.number} delay={index * 0.08}>
                  <motion.a
                    href={`#service-${index + 1}`}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="group block h-full bg-white p-7"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center bg-[#F2F8FC] text-[#19A7E0] transition-all duration-300 group-hover:bg-[#063B66]">
                        <Icon size={23} />
                      </div>

                      <span className="text-xs font-black text-slate-200">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="mt-9 text-xl font-black leading-tight text-[#063B66]">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#607D94]">
                      {service.description}
                    </p>

                    <div className="mt-7 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#19A7E0]">
                      Explore Service
                      <FiChevronRight className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </motion.a>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES */}
      {services.map((service, index) => {
        const Icon = service.icon;
        const reverse = index % 2 !== 0;

        return (
          <section
            key={service.number}
            id={`service-${index + 1}`}
            className={`relative overflow-hidden ${
              index % 2 === 0 ? "bg-[#F4F9FC]" : "bg-white"
            } py-24 lg:py-32`}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <div
                className={`grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <FadeIn>
                  <div className="relative">
                    <div className="absolute -left-5 -top-5 h-24 w-24 border-l-2 border-t-2 border-[#19A7E0]" />

                    <motion.div
                      whileHover={{ scale: 1.015 }}
                      transition={{ duration: 0.5 }}
                      className="relative h-[500px] overflow-hidden bg-[#063B66]"
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#063B66]/90 via-[#063B66]/10 to-transparent" />

                      <div className="absolute bottom-7 left-7 right-7">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center bg-[#19A7E0] text-white">
                            <Icon size={21} />
                          </div>

                          <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                            {service.shortTitle}
                          </span>
                        </div>
                      </div>
                    </motion.div>

                    <div className="absolute -bottom-5 -right-5 h-24 w-24 border-b-2 border-r-2 border-[#063B66]" />
                  </div>
                </FadeIn>

                <FadeIn delay={0.12}>
                  <div>
                    <div className="mb-6 flex items-center gap-3">
                      <span className="text-5xl font-black tracking-[-0.05em] text-[#19A7E0]/20">
                        {service.number}
                      </span>

                      <span className="h-px w-10 bg-[#19A7E0]" />

                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                        Core Service
                      </span>
                    </div>

                    <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-[#063B66] sm:text-5xl">
                      {service.title}
                    </h2>

                    <p className="mt-7 text-base leading-8 text-[#607D94]">
                      {service.description}
                    </p>

                    <div className="mt-9 border-t border-slate-200 pt-7">
                      <div className="mb-5 text-xs font-bold uppercase tracking-[0.17em] text-[#063B66]">
                        Our Capabilities
                      </div>

                      <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                        {service.capabilities.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-3 text-sm leading-6 text-[#607D94]"
                          >
                            <FiCheck
                              className="mt-1 shrink-0 text-[#19A7E0]"
                              size={15}
                            />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className="group mt-9 inline-flex items-center gap-3 bg-[#063B66] px-6 py-4 text-xs font-bold uppercase tracking-[0.13em] text-white transition-all hover:bg-[#19A7E0]"
                    >
                      Discuss This Service
                      <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>
        );
      })}

      {/* LIGHTNING PROTECTION DEEP DIVE */}
      <section className="bg-[#063B66] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <FadeIn>
              <div className="lg:sticky lg:top-28">
                <div className="mb-6 flex items-center gap-3">
                  <FiShield className="text-[#19A7E0]" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                    Facility Electrical Protection
                  </span>
                </div>

                <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                  Protection is more than a lightning rod.
                </h2>

                <p className="mt-7 leading-8 text-white/60">
                  Resource Plus approaches facility electrical protection as a
                  coordinated system involving lightning protection, grounding,
                  bonding and surge protection rather than relying on a single
                  technology.
                </p>

                <div className="mt-8 border-l-2 border-[#19A7E0] pl-5">
                  <p className="text-sm font-semibold leading-7 text-white/80">
                    “Protect people. Protect property. Protect operational
                    continuity.”
                  </p>
                </div>
              </div>
            </FadeIn>

            <div>
              <FadeIn>
                <div className="mb-8 text-xs font-bold uppercase tracking-[0.18em] text-white/40">
                  ERICO Six Point Plan of Protection
                </div>
              </FadeIn>

              <div className="space-y-3">
                {protectionPlan.map((item, index) => (
                  <FadeIn key={item.number} delay={index * 0.06}>
                    <motion.div
                      whileHover={{ x: 7 }}
                      transition={{ duration: 0.25 }}
                      className="group border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
                    >
                      <div className="flex gap-5">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#19A7E0]/40 text-xs font-black text-[#19A7E0]">
                          {item.number}
                        </div>

                        <div>
                          <h3 className="text-lg font-black text-white">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-sm leading-7 text-white/55">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GROUNDING */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#19A7E0]" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                    Grounding & Bonding
                  </span>
                </div>

                <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-[#063B66] sm:text-5xl">
                  The foundation of effective facility protection.
                </h2>

                <p className="mt-7 leading-8 text-[#607D94]">
                  The company's facility protection approach begins with
                  proper grounding. Site conditions such as soil resistivity,
                  moisture, accessibility and existing infrastructure influence
                  the grounding methods required.
                </p>

                <p className="mt-5 leading-8 text-[#607D94]">
                  Resource Plus designs grounding systems around low impedance,
                  effective dissipation of lightning energy, equipment and
                  personnel safety, equipotential bonding and long-term
                  reliability.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="relative">
                <div className="absolute -right-5 -top-5 h-20 w-20 border-r-2 border-t-2 border-[#19A7E0]" />

                <div className="bg-[#F4F9FC] p-8 lg:p-10">
                  <div className="flex items-center gap-4 border-b border-slate-200 pb-6">
                    <div className="flex h-12 w-12 items-center justify-center bg-[#063B66] text-white">
                      <FiDroplet size={22} />
                    </div>

                    <div>
                      <div className="text-lg font-black text-[#063B66]">
                        Grounding System Components
                      </div>
                      <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#19A7E0]">
                        Engineered Protection
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    {groundingFeatures.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-[#607D94]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#19A7E0]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute -bottom-5 -left-5 h-20 w-20 border-b-2 border-l-2 border-[#063B66]" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ADDITIONAL EXPERTISE */}
      <section className="bg-[#F4F9FC] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#19A7E0]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                  Additional Technical Expertise
                </span>
              </div>

              <h2 className="text-4xl font-black tracking-[-0.04em] text-[#063B66] sm:text-5xl">
                Beyond the four core practices.
              </h2>

              <p className="mt-6 leading-8 text-[#607D94]">
                Resource Plus also has a documented track record in specialised
                oil & gas equipment supply, technical consulting, training and
                technology transfer.
              </p>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {additionalCapabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <FadeIn key={item.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -7 }}
                    className="h-full border border-slate-200 bg-white p-8 lg:p-10"
                  >
                    <div className="flex h-14 w-14 items-center justify-center bg-[#063B66] text-[#19A7E0]">
                      <Icon size={25} />
                    </div>

                    <h3 className="mt-7 text-2xl font-black text-[#063B66]">
                      {item.title}
                    </h3>

                    <p className="mt-5 leading-8 text-[#607D94]">
                      {item.text}
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {item.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-3 text-sm text-[#607D94]"
                        >
                          <FiCheck className="shrink-0 text-[#19A7E0]" />
                          {point}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* DELIVERY PROCESS */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn>
            <div className="text-center">
              <div className="mb-6 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#19A7E0]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                  How We Deliver
                </span>
                <span className="h-px w-10 bg-[#19A7E0]" />
              </div>

              <h2 className="text-4xl font-black tracking-[-0.04em] text-[#063B66] sm:text-5xl">
                From engineering challenge
                <span className="block text-[#19A7E0]">
                  to completed solution.
                </span>
              </h2>
            </div>
          </FadeIn>

          <div className="relative mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-16 hidden h-px bg-slate-200 lg:block" />

            {deliveryStages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <FadeIn key={stage.number} delay={index * 0.08}>
                  <motion.div
                    whileHover={{ y: -7 }}
                    className="relative z-10 bg-white text-center"
                  >
                    <div className="mx-auto flex h-32 w-32 items-center justify-center border border-slate-200 bg-white">
                      <div className="flex h-20 w-20 items-center justify-center bg-[#063B66] text-[#19A7E0]">
                        <Icon size={27} />
                      </div>
                    </div>

                    <div className="mt-7 text-[10px] font-black uppercase tracking-[0.2em] text-[#19A7E0]">
                      Stage {stage.number}
                    </div>

                    <h3 className="mt-2 text-xl font-black text-[#063B66]">
                      {stage.title}
                    </h3>

                    <p className="mt-4 px-4 text-sm leading-7 text-[#607D94]">
                      {stage.text}
                    </p>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="bg-[#063B66] py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <FadeIn>
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#19A7E0]" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                    Sectors We Serve
                  </span>
                </div>

                <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                  Engineering capability across critical sectors.
                </h2>

                <p className="mt-6 leading-8 text-white/55">
                  Our documented project experience spans energy,
                  telecommunications, manufacturing, commercial and
                  residential development, financial institutions and
                  government infrastructure.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-3">
                {sectors.map((sector, index) => (
                  <motion.div
                    key={sector}
                    whileHover={{
                      backgroundColor: "rgba(25,167,224,0.12)",
                    }}
                    className="border-b border-r border-white/10 p-6"
                  >
                    <div className="text-[10px] font-black uppercase tracking-[0.13em] text-[#19A7E0]">
                      0{index + 1}
                    </div>
                    <div className="mt-4 text-sm font-bold text-white">
                      {sector}
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-[#F4F9FC]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn>
            <div className="relative overflow-hidden bg-[#063B66] px-8 py-16 lg:px-16 lg:py-20">
              <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#19A7E0]/20 to-transparent" />

              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />

              <div className="relative max-w-3xl">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#19A7E0]" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                    Start a Project
                  </span>
                </div>

                <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                  Have an engineering requirement?
                  <span className="block text-[#19A7E0]">
                    Let’s build the solution.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl leading-8 text-white/60">
                  Talk to Resource Plus about facility protection,
                  telecommunications, construction, power infrastructure,
                  technical consulting or your next engineering project.
                </p>

                <Link
                  to="/contact"
                  className="group mt-9 inline-flex items-center gap-3 bg-[#19A7E0] px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all hover:bg-white hover:text-[#063B66]"
                >
                  Discuss Your Project
                  <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

export default Services;
