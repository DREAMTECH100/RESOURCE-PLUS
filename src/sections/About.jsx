import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCheck,
  FiShield,
  FiTarget,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="overflow-hidden bg-white">

      {/* =========================================================
          ABOUT HERO
      ========================================================= */}
      <section className="relative min-h-[78vh] overflow-hidden">

        {/* ONLINE BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://godstojie-construction.com.ng/Asset/images/optimized/hero.jpg')",
          }}
        />

        {/* DARK BLUE OVERLAY */}
        <div className="absolute inset-0 bg-[#063B66]/75" />

        {/* BLUE GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#063B66] via-[#063B66]/90 to-[#063B66]/35" />

        {/* TECHNICAL GRID */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-center px-6 pb-20 pt-32 lg:px-10">

          <div className="max-w-4xl">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-12 bg-[#19A7E0]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#19A7E0]">
                About Resource Plus
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-[82px]"
            >
              Engineering expertise.
              <br />

              <span className="text-[#19A7E0]">
                Built over decades.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 max-w-2xl text-base leading-8 text-white/75 sm:text-lg"
            >
              Since 1996, Resource Plus Limited has delivered engineering,
              construction and technical solutions across Nigeria — combining
              professional expertise, strategic partnerships and indigenous
              capacity to solve demanding infrastructure challenges.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/services"
                className="group flex items-center gap-3 rounded-sm bg-[#19A7E0] px-6 py-4 text-sm font-bold text-white transition-all hover:bg-white hover:text-[#063B66]"
              >
                Explore Our Expertise

                <FiArrowUpRight
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                to="/projects"
                className="flex items-center gap-3 rounded-sm border border-white/30 px-6 py-4 text-sm font-bold text-white transition-all hover:border-white hover:bg-white/10"
              >
                View Our Projects
              </Link>
            </motion.div>

          </div>
        </div>

        {/* ESTABLISHED CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-0 right-[6%] hidden w-60 bg-white p-7 shadow-2xl lg:block"
        >
          <div className="text-5xl font-black tracking-tight text-[#063B66]">
            1996
          </div>

          <div className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
            Established
          </div>

          <div className="mt-5 h-1 w-12 bg-[#19A7E0]" />

          <p className="mt-4 text-sm leading-6 text-slate-500">
            Over three decades of indigenous engineering experience.
          </p>
        </motion.div>

      </section>


      {/* =========================================================
          SECTION 1 — WHO WE ARE
      ========================================================= */}
      <section className="bg-white py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[0.9] overflow-hidden">

                <img
                  src="https://teamgroup.it/wp-content/uploads/2019/01/Team-Group-Ajaokuta-Warri-Rail-Line-3.jpg"
                  alt="Engineer reviewing plans on an infrastructure project"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#063B66]/60 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7">
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#19A7E0]">
                    Resource Plus Limited
                  </div>

                  <div className="mt-2 text-2xl font-bold text-white">
                    Engineering with purpose.
                  </div>
                </div>
              </div>

              {/* BLUE ACCENT */}
              <div className="absolute -bottom-5 -right-5 h-24 w-24 border-b-4 border-r-4 border-[#19A7E0]" />
            </motion.div>


            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8 }}
            >

              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#19A7E0]" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                  Who We Are
                </span>
              </div>

              <h2 className="max-w-xl text-4xl font-black leading-tight tracking-[-0.035em] text-[#063B66] sm:text-5xl">
                A Nigerian engineering company built on expertise and integrity.
              </h2>

              <p className="mt-7 text-base leading-8 text-slate-500">
                Resource Plus Limited is a wholly indigenous engineering,
                construction and technical services company established in
                1996. The company brings together expertise across civil,
                mechanical and electrical engineering, telecommunications,
                construction and technical services.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-500">
                From project planning and design through construction,
                installation, commissioning and maintenance, Resource Plus
                provides end-to-end solutions designed around quality,
                safety and performance.
              </p>

              <div className="mt-9 grid grid-cols-2 gap-6 border-t border-slate-100 pt-7">

                <div>
                  <div className="text-3xl font-black text-[#063B66]">
                    30+
                  </div>

                  <div className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                    Years Experience
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-black text-[#063B66]">
                    50+
                  </div>

                  <div className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                    Major Projects
                  </div>
                </div>

              </div>

            </motion.div>

          </div>
        </div>
      </section>


      {/* =========================================================
          SECTION 2 — WHAT WE STAND FOR
      ========================================================= */}
      <section className="bg-[#F4F9FC] py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
            >

              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#19A7E0]" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                  What We Stand For
                </span>
              </div>

              <h2 className="text-4xl font-black leading-tight tracking-[-0.035em] text-[#063B66] sm:text-5xl">
                Professionalism.
                <br />
                Integrity.
                <br />
                Excellence.
              </h2>

              <p className="mt-7 max-w-lg text-base leading-8 text-slate-500">
                Our mission is to build a diversified engineering service
                company characterised by professionalism, integrity and
                commitment to people and the environment.
              </p>

            </motion.div>


            {/* PRINCIPLES */}
            <div className="grid gap-5 sm:grid-cols-2">

              {[
                {
                  icon: FiTarget,
                  title: "Precision",
                  text: "Engineered accuracy in every calculation, audit and installation.",
                },
                {
                  icon: FiShield,
                  title: "Safety First",
                  text: "An unyielding dedication to human life and operational security.",
                },
                {
                  icon: FiZap,
                  title: "Excellence",
                  text: "Robust solutions built to withstand demanding industrial conditions.",
                },
                {
                  icon: FiUsers,
                  title: "Local Content",
                  text: "Growing indigenous capacity and maximising Nigerian participation.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                    className="group bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#063B66]/5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center bg-[#19A7E0]/10 text-[#19A7E0] transition-colors group-hover:bg-[#063B66] group-hover:text-white">
                      <Icon size={21} />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-[#063B66]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          SECTION 3 — ENGINEERING CAPABILITY
      ========================================================= */}
      <section className="bg-white py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#19A7E0]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                What We Do
              </span>
            </div>

            <h2 className="text-4xl font-black leading-tight tracking-[-0.035em] text-[#063B66] sm:text-5xl">
              Multiple disciplines.
              <br />
              One engineering standard.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500">
              Resource Plus combines specialised engineering capabilities
              across infrastructure, protection, construction and technical
              services to deliver integrated solutions for demanding
              environments.
            </p>

          </motion.div>


          <div className="mt-16 grid gap-6 md:grid-cols-2">

            {/* LIGHTNING */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="group relative min-h-[430px] overflow-hidden"
            >

              <img
                src="https://www.dehn-africa.com/sites/default/files/styles/2_1_ratio_2880_x_1440/public/marcom/HVI-light-plus-819600-2880x1440_0.jpg?itok=2lSzOpuW"
                alt="Lightning protection installation"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#063B66] via-[#063B66]/30 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8">

                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                  Protection Systems
                </div>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  Lightning Protection & Earthing
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
                  Engineered lightning protection, grounding, bonding, surge
                  protection, testing and commissioning solutions.
                </p>

              </div>
            </motion.div>


            {/* TELECOM */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="group relative min-h-[430px] overflow-hidden"
            >

              <img
                src="https://ocdn.eu/images/pulscms/MjE7MDA_/99f6acf954182f7f0d262b77f21d08fa.jpg"
                alt="Telecommunications tower engineer"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#063B66] via-[#063B66]/30 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8">

                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                  Connectivity
                </div>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  Telecommunications Infrastructure
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
                  BTS build-out, site acquisition, mast and tower projects,
                  cabling, server rooms and data centre infrastructure.
                </p>

              </div>
            </motion.div>


            {/* POWER */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="group relative min-h-[430px] overflow-hidden"
            >

              <img
                src="https://fgnpowerco.ng/wp-content/uploads/2023/05/7-scaled.jpeg"
                alt="Engineers inspecting power infrastructure"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#063B66] via-[#063B66]/30 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8">

                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                  Power Infrastructure
                </div>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  Power & Civil Engineering
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
                  Substation construction, MV/LV electrical installations,
                  civil and structural engineering and mechanical services.
                </p>

              </div>
            </motion.div>


            {/* CONSTRUCTION */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="group relative min-h-[430px] overflow-hidden"
            >

              <img
                src="https://images.nigeriapropertycentre.com/properties/images/thumbs/2787920/067e39419c9014-luxury-built-8-bedroom-duplex-with-private-pool-detached-duplexes-for-sale-asokoro-district-abuja.jpg"
                alt="Luxury residential construction"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#063B66] via-[#063B66]/30 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8">

                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                  Built Environment
                </div>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  Construction & Real Estate
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
                  Residential and commercial construction, site stabilisation,
                  project management and premium building finishes.
                </p>

              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* =========================================================
          SECTION 4 — PARTNERSHIPS & TRACK RECORD
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#063B66] py-24 lg:py-32">

        {/* BACKGROUND DETAIL */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >

              <div className="aspect-[0.9] overflow-hidden">

                <img
                  src="https://www.dehn-africa.com/sites/default/files/styles/2_1_ratio_2880_x_1440/public/marcom/HVI-light-plus-819600-2880x1440_0.jpg?itok=2lSzOpuW"
                  alt="Industrial engineering protection system"
                  className="h-full w-full object-cover"
                />

              </div>

              <div className="absolute -bottom-5 -right-5 bg-[#19A7E0] px-7 py-6 text-white">
                <div className="text-4xl font-black">
                  10+
                </div>

                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em]">
                  Strategic Alliances
                </div>
              </div>

            </motion.div>


            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8 }}
            >

              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#19A7E0]" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                  Built Through Partnership
                </span>
              </div>

              <h2 className="text-4xl font-black leading-tight tracking-[-0.035em] text-white sm:text-5xl">
                Global knowledge.
                <br />
                Local capability.
              </h2>

              <p className="mt-7 text-base leading-8 text-white/65">
                Resource Plus works with recognised international organisations
                to bring specialist knowledge, technology and training into
                the Nigerian market while continuing to grow indigenous
                engineering capacity.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "ERICO BV Europe",
                  "Brady Corporation",
                  "IDC Technologies",
                  "Stewart Training Co.",
                  "EES Group",
                  "Lightning Consultants UK",
                ].map((partner) => (
                  <div
                    key={partner}
                    className="flex items-center gap-3 border-b border-white/10 pb-3"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#19A7E0]/15 text-[#19A7E0]">
                      <FiCheck size={13} />
                    </span>

                    <span className="text-sm font-semibold text-white/80">
                      {partner}
                    </span>
                  </div>
                ))}

              </div>

            </motion.div>

          </div>
        </div>
      </section>


      {/* =========================================================
          TRACK RECORD STRIP
      ========================================================= */}
      <section className="border-b border-slate-100 bg-white py-16">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {[
              ["30+", "Years of Engineering Excellence"],
              ["50+", "Major Projects Delivered"],
              ["10+", "Strategic Alliance Members"],
              ["5+", "Technical Training Partnerships"],
            ].map(([value, label], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="border-l-2 border-[#19A7E0] pl-5"
              >
                <div className="text-4xl font-black tracking-tight text-[#063B66]">
                  {value}
                </div>

                <div className="mt-2 text-xs font-bold uppercase leading-5 tracking-[0.12em] text-slate-400">
                  {label}
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>


      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="bg-[#F4F9FC] py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between gap-8 md:flex-row md:items-end"
          >

            <div>

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#19A7E0]" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                  Start a Conversation
                </span>
              </div>

              <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-[-0.035em] text-[#063B66] sm:text-5xl">
                Have an engineering challenge?
                <br />
                <span className="text-[#19A7E0]">
                  Let's build the solution.
                </span>
              </h2>

            </div>

            <Link
              to="/contact"
              className="group flex shrink-0 items-center gap-3 rounded-sm bg-[#063B66] px-7 py-4 text-sm font-bold text-white transition-all hover:bg-[#19A7E0]"
            >
              Talk to Resource Plus

              <FiArrowUpRight
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

          </motion.div>

        </div>
      </section>

    </main>
  );
}

export default About;