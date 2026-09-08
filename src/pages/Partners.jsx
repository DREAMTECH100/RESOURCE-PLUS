import { motion } from "framer-motion";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiAward,
  FiBookOpen,
  FiCheck,
  FiGlobe,
  FiLayers,
  FiShield,
  FiTarget,
  FiTool,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const partners = [
  {
    number: "01",
    name: "ERICO BV Europe",
    category: "Facility Electrical Protection",
    short:
      "Lightning protection, earthing, grounding, surge protection and Cadweld solutions.",
    description:
      "Resource Plus works with ERICO Europe BV on facility electrical protection, deploying technology and equipment across lightning protection, earthing, grounding, surge protection and exothermic welding applications.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1800&q=90",
    icon: FiShield,
    capabilities: [
      "ERITECH System 3000",
      "Lightning protection systems",
      "Earthing and grounding systems",
      "Surge and transient protection",
      "CADWELD exothermic connections",
      "Facility electrical protection",
    ],
    featured: true,
  },
  {
    number: "02",
    name: "Brady Corporation",
    category: "Identification Solutions",
    short:
      "Industrial identification, labelling, signage and safety solutions.",
    description:
      "Brady Corporation supports Resource Plus's industrial supply and delivery capabilities with identification, labelling, signage and safety products for demanding industrial environments.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1800&q=90",
    icon: FiLayers,
    capabilities: [
      "Industrial identification",
      "Labelling solutions",
      "Safety signage",
      "Oil & gas applications",
      "Manufacturing environments",
      "Industrial safety products",
    ],
  },
  {
    number: "03",
    name: "IDC Technologies",
    category: "Training & Manpower Development",
    short:
      "Technical and engineering training programmes bringing international best practices to Nigeria.",
    description:
      "Through its relationship with IDC Technologies, Resource Plus supports technical skills development and manpower training, helping bring international engineering and technical practices to professionals in Nigeria.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1800&q=90",
    icon: FiBookOpen,
    capabilities: [
      "Technical training",
      "Engineering development",
      "Skills acquisition",
      "Workforce development",
      "International best practices",
      "Human capital development",
    ],
  },
  {
    number: "04",
    name: "Stewart Training Co.",
    category: "Petroleum Technical Training",
    short:
      "Petroleum technical training designed around international industry standards.",
    description:
      "Resource Plus's strategic relationship with Stewart Training Co. supports petroleum technical training and the development of professionals serving the oil and gas industry.",
    image:
      "https://images.unsplash.com/photo-1581093458791-9d42e3c7f3c8?auto=format&fit=crop&w=1800&q=90",
    icon: FiTool,
    capabilities: [
      "Petroleum technical training",
      "Oil & gas skills development",
      "Professional training",
      "Technical competence",
      "International standards",
      "Workforce capacity building",
    ],
  },
  {
    number: "05",
    name: "EES Group",
    category: "Strategic Engineering Alliance",
    short:
      "A strategic relationship forming part of Resource Plus's international engineering alliance network.",
    description:
      "EES Group is identified in the Resource Plus company profile as one of the organisations within the company's strategic alliances and partner network.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1800&q=90",
    icon: FiGlobe,
    capabilities: [
      "Strategic engineering relationship",
      "International partner network",
      "Technical collaboration",
      "Engineering knowledge",
      "Industry experience",
      "Local capability development",
    ],
  },
  {
    number: "06",
    name: "Lightning Consultants UK",
    category: "Risk Assessment & Design",
    short:
      "Specialist lightning risk assessment and protection design consultancy.",
    description:
      "The profile identifies Lightning Consultants UK as a specialist consultancy supporting complex industrial and commercial projects through lightning risk assessment and protection design.",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1800&q=90",
    icon: FiZap,
    capabilities: [
      "Lightning risk assessment",
      "Protection design",
      "Engineering assessment",
      "System validation",
      "Industrial applications",
      "Commercial applications",
    ],
  },
];

const supportedCapabilities = [
  {
    icon: FiShield,
    title: "Facility Protection",
    text:
      "International technology and specialist knowledge supporting lightning protection, grounding, bonding and surge protection.",
  },
  {
    icon: FiTool,
    title: "Industrial Solutions",
    text:
      "Technical products and identification solutions supporting demanding oil & gas, manufacturing and industrial environments.",
  },
  {
    icon: FiBookOpen,
    title: "Technical Training",
    text:
      "Access to technical and petroleum training relationships that support skills acquisition and human capital development.",
  },
  {
    icon: FiTarget,
    title: "Engineering Design",
    text:
      "Specialist knowledge supporting assessment, protection design, validation and technically sound project execution.",
  },
];

const partnerStats = [
  { value: "50+", label: "Combined Partner Experience" },
  { value: "6", label: "Named Strategic Alliances" },
  { value: "10+", label: "Affiliate & Alliance Members" },
  { value: "5+", label: "Technical Training Partnerships" },
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

function Partners() {
  return (
    <main className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative min-h-[700px] overflow-hidden bg-[#063B66]">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2200&q=90"
            alt="Engineering professionals collaborating"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#063B66] via-[#063B66]/92 to-[#063B66]/35" />

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative mx-auto flex min-h-[700px] max-w-7xl items-center px-6 pb-20 pt-32 lg:px-10">
          <div className="max-w-4xl">
            <FadeIn>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#19A7E0]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#19A7E0]">
                  Strategic Alliances
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-5xl font-black leading-[0.97] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
                Global knowledge.
                <span className="block text-[#19A7E0]">
                  Local capability.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
                Resource Plus is backed by strategic relationships with
                recognised international organisations, combining technical
                knowledge, specialist products and professional development
                with indigenous engineering capability in Nigeria.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#partner-network"
                  className="group flex items-center gap-3 bg-[#19A7E0] px-6 py-4 text-xs font-bold uppercase tracking-[0.13em] text-white transition-all hover:bg-white hover:text-[#063B66]"
                >
                  Explore Our Partners
                  <FiArrowDown className="transition-transform group-hover:translate-y-1" />
                </a>

                <Link
                  to="/contact"
                  className="flex items-center gap-3 border border-white/30 bg-white/5 px-6 py-4 text-xs font-bold uppercase tracking-[0.13em] text-white backdrop-blur-sm transition-all hover:border-[#19A7E0] hover:bg-[#19A7E0]"
                >
                  Work With Us
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
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <FadeIn>
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#19A7E0]" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                    Why Partnerships Matter
                  </span>
                </div>

                <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-[#063B66] sm:text-5xl">
                  The strength of
                  <span className="block text-[#19A7E0]">
                    global collaboration.
                  </span>
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div>
                <p className="text-base leading-8 text-[#607D94]">
                  Resource Plus was established with the objective of aligning
                  with the world's best engineering and manufacturing
                  companies to bring cost-effective, quality products and
                  international expertise to Nigeria.
                </p>

                <p className="mt-5 text-base leading-8 text-[#607D94]">
                  Our strategic alliances strengthen our ability to deliver
                  specialist engineering services, industrial products,
                  technical training and engineering solutions while
                  supporting the company's commitment to local content and
                  indigenous capacity development.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* STATS */}
          <div className="mt-14 grid grid-cols-2 border-y border-slate-200 md:grid-cols-4">
            {partnerStats.map((stat, index) => (
              <FadeIn key={stat.label} delay={index * 0.08}>
                <motion.div
                  whileHover={{ backgroundColor: "#F4F9FC" }}
                  className="border-r border-slate-200 px-6 py-9 last:border-r-0"
                >
                  <div className="text-4xl font-black tracking-[-0.04em] text-[#063B66] sm:text-5xl">
                    {stat.value}
                  </div>

                  <div className="mt-2 max-w-[180px] text-[9px] font-bold uppercase leading-5 tracking-[0.14em] text-slate-400">
                    {stat.label}
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER NETWORK */}
      <section
        id="partner-network"
        className="bg-[#F4F9FC] py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#19A7E0]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                  Our Partner Network
                </span>
              </div>

              <h2 className="text-4xl font-black tracking-[-0.04em] text-[#063B66] sm:text-5xl">
                Specialist partners.
                <span className="block text-[#19A7E0]">
                  Complementary expertise.
                </span>
              </h2>

              <p className="mt-6 leading-8 text-[#607D94]">
                Each relationship strengthens a different part of our
                engineering and technical delivery capability.
              </p>
            </div>
          </FadeIn>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {partners.map((partner, index) => {
              const Icon = partner.icon;

              return (
                <FadeIn key={partner.name} delay={index * 0.07}>
                  <motion.article
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className={`group overflow-hidden border bg-white ${
                      partner.featured
                        ? "border-[#19A7E0]"
                        : "border-slate-200"
                    }`}
                  >
                    {/* IMAGE */}
                    <div className="relative h-[280px] overflow-hidden bg-[#063B66]">
                      <img
                        src={partner.image}
                        alt={`${partner.name} partnership`}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#063B66] via-[#063B66]/30 to-transparent" />

                      <div className="absolute left-5 top-5 bg-[#063B66] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-white">
                        Partner {partner.number}
                      </div>

                      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-5">
                        <div>
                          <div className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#19A7E0]">
                            {partner.category}
                          </div>

                          <h3 className="mt-2 text-2xl font-black text-white">
                            {partner.name}
                          </h3>
                        </div>

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-white text-[#063B66]">
                          <Icon size={22} />
                        </div>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-7 lg:p-9">
                      <p className="leading-7 text-[#607D94]">
                        {partner.description}
                      </p>

                      <div className="mt-7 border-t border-slate-100 pt-6">
                        <div className="mb-4 text-[9px] font-bold uppercase tracking-[0.17em] text-[#063B66]">
                          Supported Capability
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                          {partner.capabilities.map((item) => (
                            <div
                              key={item}
                              className="flex items-start gap-2 text-xs leading-5 text-[#607D94]"
                            >
                              <FiCheck
                                size={14}
                                className="mt-0.5 shrink-0 text-[#19A7E0]"
                              />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ERICO FEATURE */}
      <section className="bg-[#063B66] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.7 }}
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=90"
                  alt="Electrical infrastructure"
                  className="h-[560px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#063B66]/80 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7">
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#19A7E0]">
                    Facility Electrical Protection
                  </div>

                  <div className="mt-2 text-3xl font-black text-white">
                    ERITECH System 3000
                  </div>
                </div>

                <div className="absolute left-5 top-5 border border-white/20 bg-[#063B66]/80 px-4 py-3 backdrop-blur-sm">
                  <div className="text-[9px] font-bold uppercase tracking-[0.16em] text-white">
                    Strategic Technology Relationship
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#19A7E0]" />

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                    Technology Partnership
                  </span>
                </div>

                <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                  Protection built around
                  <span className="block text-[#19A7E0]">
                    proven technology.
                  </span>
                </h2>

                <p className="mt-7 leading-8 text-white/60">
                  ERICO Europe BV is identified by Resource Plus as a key
                  technology relationship for facility electrical protection.
                  The company deploys ERICO technology and equipment in
                  lightning, surge, transient protection and earthing
                  applications.
                </p>

                <p className="mt-5 leading-8 text-white/60">
                  The ERITECH System 3000 forms part of the ERICO Six Point
                  Protection Plan and combines lightning discharge capture,
                  controlled energy conveyance and low-impedance grounding.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Lightning discharge capture",
                    "Controlled energy conveyance",
                    "Low-impedance grounding",
                    "Equipotential bonding",
                    "AC power surge protection",
                    "Telecommunications protection",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <FiCheck className="shrink-0 text-[#19A7E0]" />
                      <span className="text-xs font-semibold text-white/75">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/services"
                  className="group mt-9 inline-flex items-center gap-3 bg-[#19A7E0] px-6 py-4 text-xs font-bold uppercase tracking-[0.13em] text-white transition-all hover:bg-white hover:text-[#063B66]"
                >
                  Explore Facility Protection
                  <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CAPABILITY GRID */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#19A7E0]" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                  What The Network Enables
                </span>
              </div>

              <h2 className="text-4xl font-black tracking-[-0.04em] text-[#063B66] sm:text-5xl">
                Partnerships that strengthen
                <span className="block text-[#19A7E0]">
                  project delivery.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl leading-8 text-[#607D94]">
                Our alliances complement Resource Plus's own engineering
                capability, helping us bring specialist knowledge, products
                and training into the Nigerian market.
              </p>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-px bg-slate-200 md:grid-cols-2 lg:grid-cols-4">
            {supportedCapabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <FadeIn key={item.title} delay={index * 0.08}>
                  <motion.div
                    whileHover={{ backgroundColor: "#F4F9FC" }}
                    className="group h-full bg-white p-8"
                  >
                    <div className="flex h-12 w-12 items-center justify-center bg-[#F2F8FC] text-[#19A7E0] transition-colors group-hover:bg-[#063B66]">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-8 text-xl font-black text-[#063B66]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#607D94]">
                      {item.text}
                    </p>

                    <div className="mt-7 h-px w-10 bg-[#19A7E0] transition-all duration-300 group-hover:w-16" />
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* GLOBAL / LOCAL */}
      <section className="relative overflow-hidden bg-[#F4F9FC] py-24 lg:py-32">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-[#19A7E0]/5" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <FadeIn>
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#19A7E0]" />

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                    Our Partnership Philosophy
                  </span>
                </div>

                <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-[#063B66] sm:text-5xl">
                  International expertise.
                  <span className="block text-[#19A7E0]">
                    Indigenous execution.
                  </span>
                </h2>

                <p className="mt-7 max-w-2xl leading-8 text-[#607D94]">
                  Resource Plus's objective is not simply to associate with
                  international organisations. The company uses strategic
                  relationships to strengthen local engineering capacity and
                  deliver quality solutions within Nigeria.
                </p>

                <p className="mt-5 max-w-2xl leading-8 text-[#607D94]">
                  This approach aligns directly with our commitment to local
                  content, technical competence, safety and engineering
                  excellence.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Bring quality international products and expertise to Nigeria.",
                    "Develop indigenous engineering and technical capacity.",
                    "Apply international standards to local project delivery.",
                    "Create cost-effective solutions for demanding industries.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#19A7E0] text-white">
                        <FiCheck size={12} />
                      </div>

                      <span className="text-sm leading-6 text-[#607D94]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="relative">
                <div className="absolute -left-5 -top-5 h-24 w-24 border-l-2 border-t-2 border-[#19A7E0]" />

                <div className="relative overflow-hidden bg-[#063B66]">
                  <img
                    src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1800&q=90"
                    alt="International collaboration and technical partnership"
                    className="h-[500px] w-full object-cover opacity-80"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#063B66] via-[#063B66]/30 to-transparent" />

                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex items-center gap-3">
                      <FiGlobe className="text-[#19A7E0]" />

                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#19A7E0]">
                        Global Network
                      </span>
                    </div>

                    <h3 className="mt-4 text-3xl font-black text-white">
                      Knowledge travels.
                      <span className="block text-[#19A7E0]">
                        Capability stays local.
                      </span>
                    </h3>
                  </div>
                </div>

                <div className="absolute -bottom-5 -right-5 h-24 w-24 border-b-2 border-r-2 border-[#063B66]" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1800&q=90"
                  alt="Technical training and professional development"
                  className="h-[520px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#063B66]/80 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7">
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#19A7E0]">
                    Human Capital Development
                  </div>

                  <div className="mt-2 text-3xl font-black text-white">
                    Building technical capacity.
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#19A7E0]" />

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                    Training Partnerships
                  </span>
                </div>

                <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-[#063B66] sm:text-5xl">
                  Engineering knowledge is
                  <span className="block text-[#19A7E0]">
                    part of the solution.
                  </span>
                </h2>

                <p className="mt-7 leading-8 text-[#607D94]">
                  Resource Plus's partnerships with IDC Technologies and
                  Stewart Training Co. extend beyond products and projects
                  into technical training, skills acquisition and human
                  capital development.
                </p>

                <p className="mt-5 leading-8 text-[#607D94]">
                  The company profile documents technical training and human
                  capital development involving major industry players
                  including Chevron, Mobil, Nigeria LNG and other corporate
                  institutions across Nigeria.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="border-l-2 border-[#19A7E0] bg-[#F4F9FC] p-5">
                    <div className="text-2xl font-black text-[#063B66]">
                      IDC
                    </div>

                    <div className="mt-2 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                      Technical & Engineering Training
                    </div>
                  </div>

                  <div className="border-l-2 border-[#19A7E0] bg-[#F4F9FC] p-5">
                    <div className="text-2xl font-black text-[#063B66]">
                      STEWART
                    </div>

                    <div className="mt-2 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                      Petroleum Technical Training
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PARTNER PRINCIPLES */}
      <section className="bg-[#063B66] py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn>
            <div className="text-center">
              <div className="mb-6 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#19A7E0]" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                  Partnership Principles
                </span>

                <span className="h-px w-10 bg-[#19A7E0]" />
              </div>

              <h2 className="mx-auto max-w-3xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                The relationships behind
                <span className="block text-[#19A7E0]">
                  engineering excellence.
                </span>
              </h2>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: FiAward,
                title: "Quality",
                text:
                  "Aligning with recognised engineering and manufacturing organisations to support quality products and solutions.",
              },
              {
                icon: FiUsers,
                title: "Local Content",
                text:
                  "Using international relationships to grow indigenous technical capacity and strengthen local participation.",
              },
              {
                icon: FiGlobe,
                title: "Global Standards",
                text:
                  "Connecting Nigerian project delivery with international knowledge, products, training and engineering practice.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <FadeIn key={item.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -7 }}
                    className="h-full border border-white/10 bg-white/5 p-8"
                  >
                    <Icon size={28} className="text-[#19A7E0]" />

                    <h3 className="mt-8 text-xl font-black text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/55">
                      {item.text}
                    </p>
                  </motion.div>
                </FadeIn>
              );
            })}
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
                    Engineering With Confidence
                  </span>
                </div>

                <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                  Bring the right expertise
                  <span className="block text-[#19A7E0]">
                    to your next project.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl leading-8 text-white/60">
                  Resource Plus combines indigenous engineering capability
                  with strategic international relationships to deliver
                  technical solutions across Nigeria.
                </p>

                <Link
                  to="/contact"
                  className="group mt-9 inline-flex items-center gap-3 bg-[#19A7E0] px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all hover:bg-white hover:text-[#063B66]"
                >
                  Discuss Your Requirement
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

export default Partners;