import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCheck,
  FiShield,
  FiTarget,
  FiUsers,
  FiZap,
  FiAward,
  FiGlobe,
  FiActivity,
} from "react-icons/fi";
import { Link } from "react-router-dom";

// Local images live in /public/images
const img = (name) => encodeURI(`/images/${name}`);

const leadership = [
  {
    name: "Clem Nwogbo",
    role: "General Managing Director",
    
    email: "clem@resource-plus.net",
    phone: "08022904213",
    image: "Clem.png",
  },
  {
    name: "Jude Iorember",
    role: "Managing Director",
    qualification: "COREN",
    email: "jude@resource-plus.net",
    phone: "08037119392",
    image: "jude.png",
  },
  {
    name: "Adebanjo Oluwaseun",
    role: "Project. Manager",
    qualification: "B.Sc Telecommunication Engineering",
    email: "adebanjo.oluwaseun@resource-plus.net",
    phone: "09087048986",
    image: "adex.jpeg",
  },
  {
    name: "Omereonye Jenkins",
    role: "Project Engineer",
    qualification: "B.Eng Electrical Engineering",
    email: "jenkins.omereonye@resource-plus.net",
    phone: "",
    image: "jenkins.jpeg",
  },
];

const principles = [
  {
    number: "01",
    icon: FiTarget,
    title: "Precision",
    text: "Engineered accuracy in every calculation, audit, installation and project decision.",
  },
  {
    number: "02",
    icon: FiShield,
    title: "Safety First",
    text: "An unyielding dedication to human life, operational security and safe project delivery.",
  },
  {
    number: "03",
    icon: FiAward,
    title: "Excellence",
    text: "Delivering robust solutions designed to withstand demanding environmental and industrial conditions.",
  },
  {
    number: "04",
    icon: FiUsers,
    title: "Local Content",
    text: "Building indigenous capacity and maximising local participation across our operations.",
  },
];

const capabilities = [
  {
    title: "Lightning Protection & Earthing",
    text: "Engineered protection systems for industrial facilities, telecommunications infrastructure and high-value assets.",
    image: img("Installation of Lightning Protection System.jpg"),
  },
  {
    title: "Telecommunications Infrastructure",
    text: "BTS build-out, site acquisition, mast and tower projects, cabling, server rooms and data centre infrastructure.",
    image: img("NetworkTelecom Mast Installation and Maintenance.jpg"),
  },
  {
    title: "Power & Civil Engineering",
    text: "Power substations, MV/LV electrical systems, civil and structural engineering and mechanical services.",
    image: img("Earthing of Power Distribution Board.jpg"),
  },
  {
    title: "Construction & Real Estate",
    text: "End-to-end construction, site stabilisation, project management and premium residential developments.",
    image: img(
      "Installation of Foundational earthing at Flour Mills Apapa SBM warehouse.jpg"
    ),
  },
];

const alliances = [
  {
    name: "ERICO BV Europe",
    category: "Facility Electrical Protection",
    text: "Global leader in lightning protection, earthing systems, surge protection and Cadweld solutions.",
  },
  {
    name: "Brady Corporation",
    category: "Identification Solutions",
    text: "World leader in identification, labelling, signage and safety products for industry.",
  },
  {
    name: "IDC Technologies",
    category: "Training & Manpower Development",
    text: "Technical and engineering training programmes bringing international best practices to industry professionals.",
  },
  {
    name: "Stewart Training Co.",
    category: "Petroleum Technical Training",
    text: "Petroleum technical training programmes designed to equip professionals with international industry standards.",
  },
];

const trackRecord = [
  { value: "30+", label: "Years of Engineering Excellence" },
  { value: "50+", label: "Major Projects Delivered" },
  { value: "10+", label: "Engineering & Technical Staff" },
  { value: "10+", label: "Alliance & Affiliate Members" },
  { value: "5+", label: "Technical Training Partnerships" },
];

function FadeIn({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function About() {
  return (
    <main className="overflow-hidden bg-white">

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative min-h-[720px] overflow-hidden bg-[#F4F9FC]">

        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("${img("Network Mast Maintenance 2.jpg")}")`,
          }}
        />

        {/* Readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-[55%] to-white/20" />

        <div className="absolute inset-0 bg-[#063B66]/10" />

        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6,59,102,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(6,59,102,0.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-6 pb-20 pt-32 lg:px-10">

          <div className="max-w-3xl">

            <FadeIn>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#19A7E0]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#19A7E0]">
                  About Resource Plus
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-[#063B66] sm:text-6xl lg:text-7xl">
                Engineering expertise.
                <span className="block text-[#19A7E0]">
                  Built over decades.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#607D94]">
                Resource Plus Limited is a wholly indigenous Nigerian
                engineering, construction and technical services company
                established in 1996 — delivering infrastructure solutions
                with professionalism, integrity and engineering excellence.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="group flex items-center gap-3 rounded-sm bg-[#063B66] px-6 py-4 text-xs font-bold uppercase tracking-[0.13em] text-white transition-all hover:bg-[#19A7E0]"
                >
                  Explore Our Capabilities
                  <FiArrowUpRight
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                <Link
                  to="/contact"
                  className="flex items-center gap-3 rounded-sm border border-[#063B66]/20 bg-white/80 px-6 py-4 text-xs font-bold uppercase tracking-[0.13em] text-[#063B66] backdrop-blur-sm transition-all hover:border-[#19A7E0] hover:text-[#19A7E0]"
                >
                  Talk to Us
                </Link>
              </div>
            </FadeIn>

          </div>
        </div>

        {/* Hero bottom marker */}
        <div className="absolute bottom-0 left-0 h-2 w-1/3 bg-[#19A7E0]" />
        <div className="absolute bottom-0 right-0 h-2 w-2/3 bg-[#063B66]" />
      </section>


      {/* =========================================================
          WHO WE ARE
      ========================================================== */}
      <section className="relative bg-white py-24 lg:py-32">

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
                A Nigerian engineering company built on expertise and
                integrity.
              </h2>

              <p className="mt-7 text-base leading-8 text-[#607D94]">
                Incorporated in 1996, Resource Plus Limited was established
                with a commitment to delivering high-quality engineering
                products, superior technical services and premium building
                solutions across Nigeria.
              </p>

              <p className="mt-5 text-base leading-8 text-[#607D94]">
                Our strength lies in the technical expertise and proven
                integrity of our leadership and personnel. Our professionals
                bring experience across engineering delivery, construction,
                telecommunications, oil & gas, power infrastructure and
                financial services.
              </p>

              <p className="mt-5 text-base leading-8 text-[#607D94]">
                We provide end-to-end solutions — from project planning and
                design through construction, installation, commissioning and
                maintenance — across Civil, Mechanical and Electrical
                Engineering disciplines.
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
            </div>
          </FadeIn>


          {/* Image */}
          <FadeIn delay={0.15}>
            <div className="relative">

              <div className="absolute -left-5 -top-5 h-24 w-24 border-l-2 border-t-2 border-[#19A7E0]" />

              <div className="relative overflow-hidden">
                <img
  src="/images/rpl.png"
  alt="Engineering and construction professionals"
  className="h-[500px] w-full object-cover"
/>

                <div className="absolute inset-0 bg-gradient-to-t from-[#063B66]/70 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7 right-7">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                    Engineering Excellence
                  </div>
                  <div className="mt-2 text-2xl font-bold text-white">
                    Built for performance.
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -right-5 h-24 w-24 border-b-2 border-r-2 border-[#063B66]" />

            </div>
          </FadeIn>

        </div>
      </section>


      {/* =========================================================
          LEADERSHIP
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#F4F9FC] py-24 lg:py-32">

        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#19A7E0]/5 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

          <FadeIn>
            <div className="max-w-3xl">

              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#19A7E0]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                  Leadership & Management
                </span>
              </div>

              <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-[#063B66] sm:text-5xl">
                Experienced people.
                <span className="block text-[#19A7E0]">
                  Engineering-driven leadership.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#607D94]">
                Resource Plus is led by professionals whose experience and
                technical perspective form the foundation of the company’s
                delivery culture.
              </p>

            </div>
          </FadeIn>


          {/* Leadership cards */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {leadership.map((person, index) => (

              <FadeIn key={person.name} delay={index * 0.08}>

                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="group overflow-hidden border border-slate-200 bg-white"
                >

                  {/* PHOTO BOX */}
                  <div className="relative h-[330px] overflow-hidden bg-gradient-to-br from-[#EAF4FA] to-[#DDECF5]">

                    {person.image ? (
                      <img
                        src={person.image}
                        alt={person.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center px-8 text-center">

                        <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-[#19A7E0]/60 bg-white/60">
                          <FiUsers
                            size={38}
                            className="text-[#19A7E0]"
                          />
                        </div>

                        <div className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#063B66]/60">
                          Leadership Portrait
                        </div>

                        <div className="mt-2 text-xs leading-5 text-slate-400">
                          Management photo
                        </div>

                      </div>
                    )}

                    <div className="absolute left-4 top-4 bg-[#063B66] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-white">
                      Resource Plus
                    </div>

                  </div>


                  {/* DETAILS */}
                  <div className="p-6">

                    <div className="text-xl font-black tracking-[-0.02em] text-[#063B66]">
                      {person.name}
                    </div>

                    <div className="mt-1 text-xs font-bold uppercase tracking-[0.13em] text-[#19A7E0]">
                      {person.role}
                    </div>

                    <div className="mt-5 border-t border-slate-100 pt-4">

                      <div className="text-xs leading-6 text-[#607D94]">
                        {person.qualification}
                      </div>

                      {person.email && (
                        <div className="mt-3 break-all text-[11px] text-slate-400">
                          {person.email}
                        </div>
                      )}

                      {person.phone && (
                        <div className="mt-1 text-[11px] text-slate-400">
                          {person.phone}
                        </div>
                      )}

                    </div>

                  </div>

                </motion.div>

              </FadeIn>

            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          VISION + MISSION
      ========================================================== */}
      <section className="bg-[#063B66] py-24 lg:py-28">

        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-10">

          <FadeIn>
            <div className="border border-white/10 p-8 lg:p-12">

              <div className="flex items-center gap-3">
                <FiGlobe className="text-[#19A7E0]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                  Our Vision
                </span>
              </div>

              <h3 className="mt-7 text-3xl font-black leading-tight text-white">
                Foremost indigenous engineering services and procurement
                company.
              </h3>

              <p className="mt-5 leading-8 text-white/65">
                A company with a reputation for innovation, ingenuity and
                excellence.
              </p>

            </div>
          </FadeIn>


          <FadeIn delay={0.12}>
            <div className="border border-white/10 bg-white/5 p-8 lg:p-12">

              <div className="flex items-center gap-3">
                <FiActivity className="text-[#19A7E0]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                  Our Mission
                </span>
              </div>

              <h3 className="mt-7 text-3xl font-black leading-tight text-white">
                Professionalism. Integrity. Commitment.
              </h3>

              <p className="mt-5 leading-8 text-white/65">
                To create a diversified engineering service company
                characterised by professionalism, integrity and commitment to
                people and the environment.
              </p>

            </div>
          </FadeIn>

        </div>
      </section>


      {/* =========================================================
          PRINCIPLES
      ========================================================== */}
      <section className="bg-white py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <FadeIn>
            <div className="max-w-2xl">

              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#19A7E0]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                  What We Stand For
                </span>
              </div>

              <h2 className="text-4xl font-black tracking-[-0.04em] text-[#063B66] sm:text-5xl">
                Standards that guide
                <span className="block text-[#19A7E0]">
                  every project.
                </span>
              </h2>

            </div>
          </FadeIn>


          <div className="mt-14 grid gap-px bg-slate-200 md:grid-cols-2 lg:grid-cols-4">

            {principles.map((item, index) => {

              const Icon = item.icon;

              return (
                <FadeIn key={item.number} delay={index * 0.08}>

                  <motion.div
                    whileHover={{ backgroundColor: "#F4F9FC" }}
                    className="group h-full bg-white p-8"
                  >

                    <div className="flex items-start justify-between">

                      <Icon
                        size={27}
                        className="text-[#19A7E0]"
                      />

                      <span className="text-xs font-black text-slate-200">
                        {item.number}
                      </span>

                    </div>

                    <h3 className="mt-10 text-xl font-black text-[#063B66]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#607D94]">
                      {item.text}
                    </p>

                  </motion.div>

                </FadeIn>
              );
            })}

          </div>

        </div>
      </section>


      {/* =========================================================
          CAPABILITIES
      ========================================================== */}
      <section className="bg-[#F4F9FC] py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <FadeIn>
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

              <div className="max-w-2xl">

                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#19A7E0]" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                    Our Capabilities
                  </span>
                </div>

                <h2 className="text-4xl font-black tracking-[-0.04em] text-[#063B66] sm:text-5xl">
                  Multiple disciplines.
                  <span className="block text-[#19A7E0]">
                    One engineering standard.
                  </span>
                </h2>

              </div>

              <Link
                to="/services"
                className="group flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#063B66]"
              >
                View All Services
                <FiArrowUpRight
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

            </div>
          </FadeIn>


          <div className="mt-14 grid gap-6 md:grid-cols-2">

            {capabilities.map((item, index) => (

              <FadeIn key={item.title} delay={index * 0.08}>

                <motion.div
                  whileHover={{ y: -7 }}
                  className="group relative min-h-[440px] overflow-hidden bg-[#063B66]"
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#063B66] via-[#063B66]/50 to-transparent" />

                  <div className="relative flex min-h-[440px] flex-col justify-end p-8 lg:p-10">

                    <div className="mb-4 h-1 w-12 bg-[#19A7E0]" />

                    <h3 className="max-w-md text-2xl font-black text-white lg:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-lg text-sm leading-7 text-white/70">
                      {item.text}
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
          STRATEGIC ALLIANCES
      ========================================================== */}
      <section className="bg-white py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <FadeIn>
            <div className="max-w-3xl">

              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#19A7E0]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                  Strategic Alliances
                </span>
              </div>

              <h2 className="text-4xl font-black tracking-[-0.04em] text-[#063B66] sm:text-5xl">
                Global knowledge.
                <span className="block text-[#19A7E0]">
                  Local capability.
                </span>
              </h2>

              <p className="mt-6 leading-8 text-[#607D94]">
                Resource Plus is supported by strategic relationships with
                recognised international organisations, combining global
                technical knowledge with local engineering capability.
              </p>

            </div>
          </FadeIn>


          <div className="mt-14 grid gap-5 md:grid-cols-2">

            {alliances.map((partner, index) => (

              <FadeIn key={partner.name} delay={index * 0.08}>

                <div className="group border border-slate-200 p-7 transition-all hover:border-[#19A7E0] hover:shadow-lg lg:p-9">

                  <div className="flex items-start justify-between gap-5">

                    <div>

                      <div className="text-xl font-black text-[#063B66]">
                        {partner.name}
                      </div>

                      <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#19A7E0]">
                        {partner.category}
                      </div>

                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#F4F9FC] text-[#19A7E0] transition-colors group-hover:bg-[#063B66]">
                      <FiArrowUpRight />
                    </div>

                  </div>

                  <p className="mt-6 text-sm leading-7 text-[#607D94]">
                    {partner.text}
                  </p>

                </div>

              </FadeIn>

            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          TRACK RECORD
      ========================================================== */}
      <section className="border-y border-white/10 bg-[#063B66]">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

            {trackRecord.map((item, index) => (

              <FadeIn key={item.label} delay={index * 0.06}>

                <div className="border-r border-white/10 px-5 py-12 last:border-r-0">

                  <div className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                    {item.value}
                  </div>

                  <div className="mt-3 max-w-[150px] text-[9px] font-bold uppercase leading-5 tracking-[0.14em] text-white/45">
                    {item.label}
                  </div>

                </div>

              </FadeIn>

            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          CTA
      ========================================================== */}
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
                    Start a Conversation
                  </span>
                </div>

                <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                  Have an engineering challenge?
                  <span className="block text-[#19A7E0]">
                    Let’s build the solution.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl leading-8 text-white/60">
                  From engineering design and construction to lightning
                  protection, telecommunications and power infrastructure,
                  Resource Plus brings technical capability and proven
                  experience to every project.
                </p>

                <Link
                  to="/contact"
                  className="group mt-9 inline-flex items-center gap-3 bg-[#19A7E0] px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all hover:bg-white hover:text-[#063B66]"
                >
                  Discuss Your Project
                  <FiArrowUpRight
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

              </div>

            </div>

          </FadeIn>

        </div>
      </section>

    </main>
  );
}

export default About;
