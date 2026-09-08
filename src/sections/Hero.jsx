import { motion } from "framer-motion";
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiCheck,
} from "react-icons/fi";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">

      {/* ONLINE HERO IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://jammosconstruct.com/Asset/images/optimized/telecommunication.jpg')",
        }}
      />

      {/* LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-[55%] to-white/20" />

      {/* RIGHT SIDE BLUE TINT */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#063B66]/20 via-transparent to-transparent" />

      {/* TECHNICAL GRID */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#063B66 1px, transparent 1px), linear-gradient(90deg, #063B66 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      {/* MAIN CONTENT */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 pt-32 lg:px-10 lg:pt-28">

        <div className="grid w-full items-center lg:grid-cols-[1.05fr_0.95fr]">

          {/* LEFT CONTENT */}
          <div className="relative z-10 max-w-3xl">

            {/* EYEBROW */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#19A7E0]" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#19A7E0]">
                Engineering Excellence. Delivered.
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl font-black leading-[0.95] tracking-[-0.045em] text-[#063B66] sm:text-6xl lg:text-7xl xl:text-[82px]"
            >
              Building the
              <br />

              <span className="text-[#19A7E0]">
                infrastructure
              </span>

              <br />

              <span className="text-[#102A43]">
                that powers progress.
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 max-w-xl text-base leading-8 text-slate-500 sm:text-lg"
            >
              Resource Plus Limited delivers engineering, construction,
              telecommunications, power infrastructure and specialist
              protection solutions for some of Nigeria's most demanding
              environments.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Link
                to="/projects"
                className="group flex items-center gap-3 rounded-sm bg-[#063B66] px-6 py-4 text-sm font-bold text-white transition-all hover:bg-[#19A7E0]"
              >
                Explore Our Work

                <FiArrowUpRight
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                to="/services"
                className="group flex items-center gap-3 rounded-sm border border-slate-200 bg-white/90 px-6 py-4 text-sm font-bold text-[#063B66] backdrop-blur-sm transition-all hover:border-[#19A7E0] hover:text-[#19A7E0]"
              >
                Our Services

                <FiArrowDownRight className="transition-transform group-hover:translate-y-1" />
              </Link>
            </motion.div>

            {/* TRUST POINTS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-12 flex flex-wrap gap-x-7 gap-y-3"
            >
              {[
                "30+ Years Experience",
                "50+ Major Projects",
                "Engineering Excellence",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-semibold text-slate-500"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#19A7E0]/10 text-[#19A7E0]">
                    <FiCheck size={12} />
                  </span>

                  {item}
                </div>
              ))}
            </motion.div>

          </div>

          {/* RIGHT SIDE */}
          <div className="hidden lg:block" />

        </div>
      </div>

      {/* FLOATING STAT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="absolute bottom-16 right-[8%] z-20 hidden w-52 rounded-sm bg-white p-5 shadow-2xl shadow-[#063B66]/10 lg:block"
      >
        <div className="text-4xl font-black tracking-tight text-[#063B66]">
          30+
        </div>

        <div className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
          Years of Engineering
        </div>

        <div className="mt-4 h-1 w-12 bg-[#19A7E0]" />
      </motion.div>

      {/* BLUE CORNER ACCENT */}
      <div className="absolute right-6 top-28 z-20 h-20 w-20 border-r-4 border-t-4 border-[#19A7E0] lg:right-10" />

      {/* SCROLL CUE */}
      <div className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 lg:flex">
        <span>Scroll to explore</span>
        <span className="h-8 w-px bg-slate-300" />
      </div>

    </section>
  );
}

export default Hero;