import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiPhone,
  FiLinkedin,
  FiChevronUp,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const services = [
  "Lightning Protection & Earthing",
  "Construction & Real Estate",
  "Telecommunications Infrastructure",
  "Power & Civil Engineering",
  "Oil & Gas Services",
  "Technical Training & Consulting",
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Partners", href: "/partners" },
  { label: "Contact Us", href: "/contact" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#063B66] text-white">
      {/* =====================================================
          TOP CTA
      ====================================================== */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#19A7E0]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                  Engineering Excellence. Delivered.
                </span>
              </div>

              <h2 className="text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                Have a project in mind?
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                From engineering design and construction to infrastructure,
                protection systems, telecommunications and power, let's
                discuss how Resource Plus can support your next project.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link
                to="/contact"
                className="group flex w-fit items-center gap-3 bg-[#19A7E0] px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all hover:bg-white hover:text-[#063B66]"
              >
                Start a Conversation
                <FiArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 py-16 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1fr_1.1fr] lg:py-20">
          {/* COMPANY */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-white">
                <span className="text-lg font-black tracking-tight text-[#063B66]">
                  RP
                </span>
              </div>

              <div>
                <div className="text-sm font-bold tracking-[0.16em] text-white">
                  RESOURCE PLUS
                </div>

                <div className="mt-0.5 text-[9px] font-semibold tracking-[0.28em] text-white/40">
                  LIMITED
                </div>
              </div>
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-7 text-white/55">
              A wholly indigenous Nigerian engineering, construction and
              technical services company established in 1996, delivering
              infrastructure solutions with professionalism, integrity and
              excellence.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <div className="h-px w-8 bg-[#19A7E0]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#19A7E0]">
                Engineering Excellence. Delivered.
              </span>
            </div>

            <div className="mt-7 flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/60 transition-all hover:border-[#19A7E0] hover:bg-[#19A7E0] hover:text-white"
              >
                <FiLinkedin size={17} />
              </a>
            </div>
          </div>

          {/* COMPANY LINKS */}
          <div>
            <div className="mb-6 text-[10px] font-bold uppercase tracking-[0.18em] text-[#19A7E0]">
              Company
            </div>

            <nav className="flex flex-col gap-4">
              {companyLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="group flex w-fit items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
                >
                  <span>{item.label}</span>

                  <FiArrowUpRight
                    size={12}
                    className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* SERVICES */}
          <div>
            <div className="mb-6 text-[10px] font-bold uppercase tracking-[0.18em] text-[#19A7E0]">
              Capabilities
            </div>

            <nav className="flex flex-col gap-4">
              {services.map((service) => (
                <Link
                  key={service}
                  to="/services"
                  className="text-sm leading-5 text-white/55 transition-colors hover:text-white"
                >
                  {service}
                </Link>
              ))}
            </nav>
          </div>

          {/* CONTACT */}
          <div>
            <div className="mb-6 text-[10px] font-bold uppercase tracking-[0.18em] text-[#19A7E0]">
              Contact
            </div>

            {/* Lagos */}
            <div className="mb-7">
              <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white">
                <FiMapPin className="text-[#19A7E0]" />
                Lagos Head Office
              </div>

              <p className="text-sm leading-6 text-white/55">
                Plot 25 Block 68,
                <br />
                Durosinmi Etti,
                <br />
                Lekki Phase 1, Lagos.
              </p>
            </div>

            {/* Abuja */}
            <div className="mb-7">
              <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white">
                <FiMapPin className="text-[#19A7E0]" />
                Abuja Office
              </div>

              <p className="text-sm leading-6 text-white/55">
                Suite B27, Emab Plaza,
                <br />
                Wuse 2, Abuja.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <a
                href="mailto:clem@resource-plus.net"
                className="flex items-center gap-3 text-sm text-white/55 transition-colors hover:text-[#19A7E0]"
              >
                <FiMail className="shrink-0 text-[#19A7E0]" />
                clem@resource-plus.net
              </a>

              <a
                href="tel:08022904213"
                className="flex items-center gap-3 text-sm text-white/55 transition-colors hover:text-[#19A7E0]"
              >
                <FiPhone className="shrink-0 text-[#19A7E0]" />
                080 2290 4213
              </a>

              <a
                href="tel:08037119392"
                className="flex items-center gap-3 text-sm text-white/55 transition-colors hover:text-[#19A7E0]"
              >
                <FiPhone className="shrink-0 text-[#19A7E0]" />
                080 3711 9392
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          FOOTER DIVIDER / MINI STATS
      ====================================================== */}
      <div className="border-y border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
            {[
              ["1996", "Established"],
              ["30+", "Years Experience"],
              ["50+", "Major Projects"],
              ["100%", "Indigenous"],
            ].map(([value, label], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="px-5 py-8 first:border-l-0"
              >
                <div className="text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl">
                  {value}
                </div>

                <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-white/35">
                  {label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-5 py-7 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {currentYear} Resource Plus Limited. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <span>Engineering · Construction · Infrastructure</span>

            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="group flex items-center gap-2 text-white/50 transition-colors hover:text-white"
            >
              Back to Top

              <span className="flex h-7 w-7 items-center justify-center border border-white/15 transition-all group-hover:border-[#19A7E0] group-hover:bg-[#19A7E0] group-hover:text-white">
                <FiChevronUp size={14} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;