import { motion } from "framer-motion";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiCheck,
  FiChevronRight,
  FiHome,
  FiMapPin,
  FiRadio,
  FiShield,
  FiTool,
  FiZap,
} from "react-icons/fi";
import { Link } from "react-router-dom";

// Local images live in /public/images
const img = (name) => encodeURI(`/images/${name}`);

const projects = [
  {
    id: "chevron",
    number: "01",
    category: "Lightning Protection",
    title: "Chevron Nigeria",
    subtitle: "Lightning Protection & Grounding System",
    location: "Warri · Escravos · Abuja · Lekki · Gbagada",
    description:
      "A multi-location remediation programme covering five Chevron Nigeria facilities, focused on upgrading lightning protection, grounding and electrical infrastructure protection.",
    image: img("Chevron Datacentre.jpg"),
    icon: FiShield,
    featured: true,
    highlights: [
      "Multi-location remediation across 5 Chevron facilities",
      "Advanced ERITECH Dynasphere System 3000 deployment",
      "Equipotential bonding of equipment and racks",
      "Replacement of obsolete lightning arrestors",
      "Inspection chambers installation and commissioning",
      "Comprehensive ground resistance testing",
      "Telecom system and electrical infrastructure protection",
      "Compliance with international safety standards",
    ],
    outcome:
      "The project provided coordinated facility protection covering lightning capture, grounding, bonding and protection of critical electrical and telecommunications infrastructure.",
  },
  {
    id: "honeywell",
    number: "02",
    category: "Electrical Protection",
    title: "Honeywell Flour Mills",
    subtitle: "Lightning Protection & Grounding System",
    location: "Sagamu, Ogun State",
    description:
      "A comprehensive lightning protection and grounding solution for a critical industrial facility, designed around site assessment, earthing, lightning protection, surge protection and system verification.",
    image: img(
      "Installation of Foundational earthing at Flour Mills Apapa SBM warehouse.jpg"
    ),
    icon: FiZap,
    highlights: [
      "Detailed site inspections and electrical measurements",
      "Engineering evaluation of facility requirements",
      "Comprehensive grounding network",
      "Equipotential bonding across the facility",
      "ERITECH System 3000 installation",
      "Integrated surge protection",
      "Ground resistance testing",
      "Compliance verification and system commissioning",
    ],
    outcome:
      "The completed protection system was designed to safeguard personnel, equipment and operational continuity at the industrial facility.",
  },
  {
    id: "millennium",
    number: "03",
    category: "Real Estate Development",
    title: "Millennium Enclave",
    subtitle: "Premium Residential Community",
    location: "Awka Millennium City, Anambra State",
    description:
      "Resource Plus served as lead developer and construction company for a premium residential development within Awka Millennium City, covering site stabilisation through luxury terrace duplex construction.",
    // No local image yet - template kept
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=90",
    icon: FiHome,
    stats: [
      { value: "15+", label: "Luxury Terrace Duplexes" },
      { value: "50%", label: "Construction Complete" },
      { value: "100%", label: "Site Stabilised" },
    ],
    highlights: [
      "Site stabilisation and ground improvement",
      "Residential development planning",
      "Luxury terrace duplex construction",
      "Project management",
      "Premium architectural finishes",
      "Infrastructure development",
    ],
    outcome:
      "The development established a premium residential offering within Awka Millennium City, combining site development with high-quality residential construction.",
  },
  {
    id: "amc",
    number: "04",
    category: "Power Infrastructure",
    title: "AMC Power Substation",
    subtitle: "Power Distribution Infrastructure",
    location: "Awka Millennium City, Anambra State",
    description:
      "Resource Plus was commissioned to construct the power substation serving Awka Millennium City, forming a critical part of the city's power distribution infrastructure.",
    // No local image yet - template kept
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2000&q=90",
    icon: FiZap,
    highlights: [
      "Civil substation construction",
      "Structural engineering works",
      "Electrical substation construction",
      "MV/LV power transmission and distribution",
      "Switchgear installation",
      "MDB panel installation",
      "Modern engineering and operational standards",
      "Infrastructure supporting growing smart-city energy demands",
    ],
    outcome:
      "The project delivered critical power infrastructure intended to support reliable and sustainable power distribution across the development.",
  },
  {
    id: "ijele",
    number: "05",
    category: "Luxury Residential",
    title: "Ijele Luxury Duplexes",
    subtitle: "Premium Residential Development",
    location: "Awka Millennium City, Anambra State",
    description:
      "A premium residential development comprising four four-bedroom duplex units with contemporary architecture, smart-home automation and superior quality finishes.",
    // No local image yet - template kept
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90",
    icon: FiHome,
    stats: [
      { value: "4", label: "Units" },
      { value: "4-Bed", label: "Each Residence" },
      { value: "Smart", label: "Home Integration" },
    ],
    highlights: [
      "Four residential units",
      "Four-bedroom duplex design",
      "Contemporary architecture",
      "Smart home automation",
      "Superior quality finishes",
      "Premium residential environment",
    ],
    outcome:
      "Ijele represents Resource Plus's residential development capability, combining construction delivery with contemporary design and smart-home integration.",
  },
  {
    id: "odogwu",
    number: "06",
    category: "Luxury Residential",
    title: "Odogwu Luxury Duplexes",
    subtitle: "Premium Detached Homes",
    location: "Awka Millennium City, Anambra State",
    description:
      "A residential development comprising two five-bedroom detached luxury duplexes, incorporating structural works, architectural finishing and full mechanical and electrical installations.",
    // No local image yet - template kept
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=90",
    icon: FiHome,
    stats: [
      { value: "2", label: "Units" },
      { value: "5-Bed", label: "Each Residence" },
      { value: "M&E", label: "Full Installation" },
    ],
    highlights: [
      "Two detached luxury duplexes",
      "Five-bedroom residential design",
      "Structural works",
      "Architectural finishing",
      "Mechanical installations",
      "Electrical installations",
      "Premium residential specification",
    ],
    outcome:
      "The project demonstrates Resource Plus's ability to take premium residential developments through structural, architectural and M&E delivery.",
  },
];

const additionalProjects = [
  {
    title: "GS Telecom MW Towers",
    category: "Telecommunications",
    text:
      "Lightning protection work covering GS Telecom microwave towers across Nigeria.",
    icon: FiRadio,
  },
  {
    title: "Morpol Engineering / NGC",
    category: "Lightning Protection",
    text:
      "Supply and installation of lightning protection systems for the Nigerian Gas Company project at Ajaokuta.",
    icon: FiShield,
  },
  {
    title: "Chevron Robertkiri",
    category: "Oil & Gas Process Equipment",
    text:
      "Supply of two diesel firewater pump packages for Chevron Nigeria.",
    icon: FiTool,
  },
  {
    title: "MTN Friendship Centre",
    category: "Building Construction",
    text:
      "Construction project delivered for MTN at Ikeja, Lagos.",
    icon: FiRadio,
  },
  {
    title: "Osborne Residential Development",
    category: "Real Estate",
    text:
      "Residential development experience in Osborne, Ikoyi, Lagos.",
    icon: FiHome,
  },
  {
    title: "GTBank Maiduguri",
    category: "Commercial Construction",
    text:
      "Building construction work for Guaranty Trust Bank in Maiduguri.",
    icon: FiTool,
  },
];

const sectors = [
  "Oil & Gas",
  "Manufacturing",
  "Telecommunications",
  "Power & Utilities",
  "Real Estate",
  "Financial Institutions",
  "Government",
  "Industrial Facilities",
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

function Projects() {
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
            src={img("Exothermic welding of a structural beam.jpg")}
            alt="Exothermic welding of a structural beam"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#063B66] via-[#063B66]/90 to-[#063B66]/25" />

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
                  Selected Projects
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-5xl font-black leading-[0.97] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
                Engineering work
                <span className="block text-[#19A7E0]">
                  that stands up to scrutiny.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
                From industrial facility protection and power infrastructure
                to telecommunications and premium real estate development,
                Resource Plus has delivered projects across some of Nigeria's
                most demanding sectors.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#featured-projects"
                  className="group flex items-center gap-3 bg-[#19A7E0] px-6 py-4 text-xs font-bold uppercase tracking-[0.13em] text-white transition-all hover:bg-white hover:text-[#063B66]"
                >
                  View Projects
                  <FiArrowDown className="transition-transform group-hover:translate-y-1" />
                </a>

                <Link
                  to="/contact"
                  className="flex items-center gap-3 border border-white/30 bg-white/5 px-6 py-4 text-xs font-bold uppercase tracking-[0.13em] text-white backdrop-blur-sm transition-all hover:border-[#19A7E0] hover:bg-[#19A7E0]"
                >
                  Start a Project
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
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <FadeIn>
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#19A7E0]" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                    Our Track Record
                  </span>
                </div>

                <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-[#063B66] sm:text-5xl">
                  More than projects.
                  <span className="block text-[#19A7E0]">
                    Proven capability.
                  </span>
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div>
                <p className="text-base leading-8 text-[#607D94]">
                  Resource Plus has documented experience across oil & gas,
                  manufacturing, telecommunications, power infrastructure,
                  construction, real estate, financial institutions and
                  government infrastructure.
                </p>

                <p className="mt-5 text-base leading-8 text-[#607D94]">
                  Our project approach combines engineering expertise,
                  technical procurement, installation, construction,
                  commissioning and maintenance to deliver solutions that
                  perform in real operating environments.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="mt-14 grid grid-cols-2 border-y border-slate-200 md:grid-cols-4">
            {[
              ["30+", "Years of Engineering Excellence"],
              ["50+", "Major Projects"],
              ["8+", "Major Sector Categories"],
              ["0%", "Safety Incidents"],
            ].map(([value, label], index) => (
              <FadeIn key={label} delay={index * 0.07}>
                <div className="border-r border-slate-200 px-6 py-8 last:border-r-0">
                  <div className="text-4xl font-black tracking-[-0.04em] text-[#063B66] sm:text-5xl">
                    {value}
                  </div>
                  <div className="mt-2 max-w-[170px] text-[9px] font-bold uppercase leading-5 tracking-[0.14em] text-slate-400">
                    {label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section
        id="featured-projects"
        className="bg-[#F4F9FC] py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#19A7E0]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                  Featured Case Studies
                </span>
              </div>

              <h2 className="text-4xl font-black tracking-[-0.04em] text-[#063B66] sm:text-5xl">
                Selected work.
                <span className="block text-[#19A7E0]">
                  Documented delivery.
                </span>
              </h2>

              <p className="mt-6 leading-8 text-[#607D94]">
                A selection of documented Resource Plus projects spanning
                facility protection, industrial infrastructure, power and
                premium residential development.
              </p>
            </div>
          </FadeIn>

          <div className="mt-16 space-y-10">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const reverse = index % 2 !== 0;

              return (
                <FadeIn key={project.id} delay={index % 2 === 0 ? 0 : 0.08}>
                  <motion.article
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="group overflow-hidden bg-white shadow-sm"
                  >
                    <div
                      className={`grid lg:grid-cols-2 ${
                        reverse ? "lg:[&>*:first-child]:order-2" : ""
                      }`}
                    >
                      {/* IMAGE */}
                      <div className="relative min-h-[430px] overflow-hidden bg-[#063B66]">
                        <img
                          src={project.image}
                          alt={`${project.title} project`}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#063B66]/90 via-[#063B66]/20 to-transparent" />

                        <div className="absolute left-6 top-6 bg-[#19A7E0] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.17em] text-white">
                          {project.category}
                        </div>

                        <div className="absolute bottom-7 left-7 right-7">
                          <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center bg-white text-[#063B66]">
                              <Icon size={20} />
                            </div>

                            <div>
                              <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/60">
                                Project {project.number}
                              </div>

                              <div className="mt-1 flex items-center gap-2 text-xs font-semibold text-white">
                                <FiMapPin className="text-[#19A7E0]" />
                                {project.location}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* CONTENT */}
                      <div className="p-8 lg:p-12">
                        <div className="flex items-start justify-between gap-5">
                          <div>
                            <div className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#19A7E0]">
                              Case Study
                            </div>

                            <h3 className="mt-3 text-3xl font-black tracking-[-0.035em] text-[#063B66] sm:text-4xl">
                              {project.title}
                            </h3>

                            <div className="mt-2 text-sm font-semibold text-slate-400">
                              {project.subtitle}
                            </div>
                          </div>

                          <div className="text-4xl font-black text-slate-100">
                            {project.number}
                          </div>
                        </div>

                        <p className="mt-7 leading-8 text-[#607D94]">
                          {project.description}
                        </p>

                        {project.stats && (
                          <div className="mt-8 grid grid-cols-3 border-y border-slate-100">
                            {project.stats.map((stat) => (
                              <div
                                key={stat.label}
                                className="border-r border-slate-100 px-3 py-5 last:border-r-0"
                              >
                                <div className="text-xl font-black text-[#063B66]">
                                  {stat.value}
                                </div>
                                <div className="mt-1 text-[8px] font-bold uppercase leading-4 tracking-[0.1em] text-slate-400">
                                  {stat.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="mt-8">
                          <div className="mb-5 text-[10px] font-bold uppercase tracking-[0.17em] text-[#063B66]">
                            Project Highlights
                          </div>

                          <div className="grid gap-3 sm:grid-cols-2">
                            {project.highlights.map((item) => (
                              <div
                                key={item}
                                className="flex items-start gap-3 text-sm leading-6 text-[#607D94]"
                              >
                                <FiCheck
                                  size={15}
                                  className="mt-1 shrink-0 text-[#19A7E0]"
                                />
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-8 border-l-2 border-[#19A7E0] pl-5">
                          <div className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
                            Project Outcome
                          </div>
                          <p className="mt-2 text-sm leading-7 text-[#607D94]">
                            {project.outcome}
                          </p>
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

      {/* ADDITIONAL PROJECT EXPERIENCE */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn>
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#19A7E0]" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                    Additional Experience
                  </span>
                </div>

                <h2 className="text-4xl font-black tracking-[-0.04em] text-[#063B66] sm:text-5xl">
                  A broader body
                  <span className="block text-[#19A7E0]">
                    of engineering work.
                  </span>
                </h2>
              </div>

              <p className="max-w-md leading-7 text-[#607D94]">
                Beyond the featured case studies, our documented work spans
                telecommunications, oil & gas equipment, commercial buildings
                and residential developments.
              </p>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-px bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
            {additionalProjects.map((project, index) => {
              const Icon = project.icon;

              return (
                <FadeIn key={project.title} delay={index * 0.06}>
                  <motion.div
                    whileHover={{ y: -7 }}
                    className="group h-full bg-white p-8 transition-colors hover:bg-[#F4F9FC]"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center bg-[#F2F8FC] text-[#19A7E0] transition-all group-hover:bg-[#063B66]">
                        <Icon size={22} />
                      </div>

                      <FiChevronRight
                        className="text-slate-200 transition-all group-hover:translate-x-1 group-hover:text-[#19A7E0]"
                        size={20}
                      />
                    </div>

                    <div className="mt-8 text-[9px] font-bold uppercase tracking-[0.16em] text-[#19A7E0]">
                      {project.category}
                    </div>

                    <h3 className="mt-2 text-xl font-black text-[#063B66]">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#607D94]">
                      {project.text}
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
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <FadeIn>
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#19A7E0]" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                    Where We Work
                  </span>
                </div>

                <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                  Experience across critical sectors.
                </h2>

                <p className="mt-6 leading-8 text-white/55">
                  Our documented client and project experience extends across
                  Nigeria's energy, industrial, telecommunications,
                  infrastructure and real estate environments.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-4">
                {sectors.map((sector, index) => (
                  <motion.div
                    key={sector}
                    whileHover={{
                      backgroundColor: "rgba(25,167,224,0.12)",
                    }}
                    className="border-b border-r border-white/10 p-6"
                  >
                    <div className="text-[9px] font-black tracking-[0.15em] text-[#19A7E0]">
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

      {/* CLIENT EXPERIENCE */}
      <section className="bg-[#F4F9FC] py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn>
            <div className="text-center">
              <div className="mb-6 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#19A7E0]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                  Client Experience
                </span>
                <span className="h-px w-10 bg-[#19A7E0]" />
              </div>

              <h2 className="mx-auto max-w-3xl text-4xl font-black tracking-[-0.04em] text-[#063B66] sm:text-5xl">
                Trusted across
                <span className="text-[#19A7E0]"> demanding industries.</span>
              </h2>
            </div>
          </FadeIn>

          <div className="mt-14 flex flex-wrap justify-center gap-3">
            {[
              "Chevron Nigeria Limited",
              "Shell Nigeria",
              "Total Fina Elf",
              "SAIPEM Contracting",
              "Dangote Refinery Site",
              "Honeywell Flour Mills",
              "MTN Nigeria",
              "HIS / Helios Towers",
              "Nigeria LNG Limited",
              "Zenith Bank Plc",
              "Diamond Bank Plc",
              "Awka Millennium City",
            ].map((client, index) => (
              <FadeIn key={client} delay={index * 0.04}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="border border-slate-200 bg-white px-5 py-4 text-xs font-bold text-[#063B66] shadow-sm"
                >
                  {client}
                </motion.div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-12 text-center text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
              And other clients across oil & gas, manufacturing,
              telecommunications, financial services, government and real
              estate.
            </div>
          </FadeIn>
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
                    Your Next Project
                  </span>
                </div>

                <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                  Ready to turn an engineering requirement
                  <span className="text-[#19A7E0]"> into reality?</span>
                </h2>

                <p className="mt-6 max-w-2xl leading-8 text-white/60">
                  Whether it is facility protection, power infrastructure,
                  telecommunications, construction or real estate, Resource
                  Plus brings decades of engineering experience to the table.
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

export default Projects;
