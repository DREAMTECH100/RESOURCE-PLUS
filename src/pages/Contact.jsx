import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowUpRight,
  FiCheck,
  FiChevronDown,
  FiClock,
  FiGlobe,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiShield,
  FiTool,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const enquiryTypes = [
  "Lightning Protection & Earthing",
  "Construction & Real Estate",
  "Telecommunications Infrastructure",
  "Power & Civil Engineering",
  "Oil & Gas Process Equipment",
  "Technical Training & Consulting",
  "General Engineering Enquiry",
];

const contactPeople = [
  {
    name: "Jude Iorember",
    role: "Managing Director",
    email: "jude@resource-plus.net",
    phone: "08037119392",
  },
  {
    name: "Adebanjo Oluwaseun",
    role: "Project. Manager",
    email: "adebanjo.oluwaseun@resource-plus.net",
    phone: "08037512806",
  },
  {
    name: "Omereonye Jenkins",
    role: "Project Engineer",
    email: "omereonye.jenkins@resource-plus.net",
    phone: "08163068672",
  },
];

const enquirySteps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    text:
      "Share your project requirement, facility challenge, technical need or service enquiry.",
  },
  {
    number: "02",
    title: "Technical Review",
    text:
      "Our team reviews the requirement and identifies the appropriate engineering or technical approach.",
  },
  {
    number: "03",
    title: "Project Discussion",
    text:
      "We engage with you to understand scope, location, timelines, specifications and project objectives.",
  },
  {
    number: "04",
    title: "Solution & Delivery",
    text:
      "From design and procurement through installation, commissioning and handover, we work toward a practical solution.",
  },
];

const serviceCards = [
  {
    icon: FiShield,
    title: "Lightning Protection",
    text:
      "Protection, earthing, grounding, bonding, surge protection, testing and commissioning.",
  },
  {
    icon: FiTool,
    title: "Construction",
    text:
      "Civil construction, real estate development, site stabilisation and project management.",
  },
  {
    icon: FiGlobe,
    title: "Telecommunications",
    text:
      "BTS build-out, site acquisition, mast and tower projects, cabling and data infrastructure.",
  },
  {
    icon: FiZap,
    title: "Power & Civil",
    text:
      "Substations, MV/LV installations, civil and structural engineering and mechanical services.",
  },
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

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    enquiryType: "",
    location: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  }

  return (
    <main className="overflow-hidden bg-white">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative min-h-[680px] overflow-hidden bg-[#063B66]">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=90"
            alt="Engineering and construction project"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#063B66] via-[#063B66]/95 to-[#063B66]/40" />

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-6 pb-20 pt-32 lg:px-10">
          <div className="max-w-4xl">
            <FadeIn>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#19A7E0]" />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#19A7E0]">
                  Contact Resource Plus
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-5xl font-black leading-[0.97] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
                Have an engineering
                <span className="block text-[#19A7E0]">
                  challenge?
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
                Talk to Resource Plus Limited about your next engineering,
                construction, infrastructure or technical requirement. From
                project planning and design through construction, installation,
                commissioning and maintenance, our team is ready to engage.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#project-enquiry"
                  className="group flex items-center gap-3 bg-[#19A7E0] px-6 py-4 text-xs font-bold uppercase tracking-[0.13em] text-white transition-all hover:bg-white hover:text-[#063B66]"
                >
                  Start an Enquiry
                  <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>

                <a
                  href="tel:08022904213"
                  className="flex items-center gap-3 border border-white/30 bg-white/5 px-6 py-4 text-xs font-bold uppercase tracking-[0.13em] text-white backdrop-blur-sm transition-all hover:border-[#19A7E0] hover:bg-[#19A7E0]"
                >
                  <FiPhone />
                  Call Us
                </a>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-2 w-1/3 bg-[#19A7E0]" />
        <div className="absolute bottom-0 right-0 h-2 w-2/3 bg-white/20" />
      </section>

      {/* =========================================================
          OFFICE LOCATIONS
      ========================================================== */}
      <section className="bg-white py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#19A7E0]" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                  Our Offices
                </span>
              </div>

              <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-[#063B66] sm:text-5xl">
                Find us in
                <span className="text-[#19A7E0]"> Lagos or Abuja.</span>
              </h2>

              <p className="mt-6 leading-8 text-[#607D94]">
                Resource Plus Limited maintains offices in Lagos and Abuja,
                providing a local base for engineering, construction,
                procurement, technical services and project coordination.
              </p>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {/* LAGOS */}
            <FadeIn>
              <motion.div
                whileHover={{ y: -7 }}
                className="group relative min-h-[430px] overflow-hidden bg-[#063B66]"
              >
                <img
                  src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1800&q=90"
                  alt="Lagos city"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#063B66] via-[#063B66]/65 to-[#063B66]/10" />

                <div className="absolute left-7 top-7 flex items-center gap-3 border border-white/20 bg-[#063B66]/70 px-4 py-3 backdrop-blur-sm">
                  <FiMapPin className="text-[#19A7E0]" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.17em] text-white">
                    Head Office
                  </span>
                </div>

                <div className="absolute bottom-8 left-7 right-7">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                    Lagos
                  </div>

                  <h3 className="mt-2 text-3xl font-black text-white">
                    Lekki Phase 1
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-6 text-white/65">
                    Plot 25 Block 68, Durosinmi Etti,
                    <br />
                    Lekki Phase 1, Lagos.
                  </p>

                  <a
                    href="tel:08037119392"
                    className="mt-6 flex w-fit items-center gap-3 text-xs font-bold uppercase tracking-[0.13em] text-white transition-colors hover:text-[#19A7E0]"
                  >
                    <FiPhone />
                    080-3711-9392
                    <FiArrowUpRight />
                  </a>
                </div>
              </motion.div>
            </FadeIn>

            {/* ABUJA */}
            <FadeIn delay={0.12}>
              <motion.div
                whileHover={{ y: -7 }}
                className="group relative min-h-[430px] overflow-hidden bg-[#063B66]"
              >
                <img
                  src="https://images.unsplash.com/photo-1591181520189-abcb0735c65d?auto=format&fit=crop&w=1800&q=90"
                  alt="Abuja city"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#063B66] via-[#063B66]/65 to-[#063B66]/10" />

                <div className="absolute left-7 top-7 flex items-center gap-3 border border-white/20 bg-[#063B66]/70 px-4 py-3 backdrop-blur-sm">
                  <FiMapPin className="text-[#19A7E0]" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.17em] text-white">
                    Abuja Office
                  </span>
                </div>

                <div className="absolute bottom-8 left-7 right-7">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                    Abuja
                  </div>

                  <h3 className="mt-2 text-3xl font-black text-white">
                    Wuse 2
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-6 text-white/65">
                    Suite B27, Emab Plaza,
                    <br />
                    Wuse 2, Abuja.
                  </p>

                  <a
                    href="tel:096708010"
                    className="mt-6 flex w-fit items-center gap-3 text-xs font-bold uppercase tracking-[0.13em] text-white transition-colors hover:text-[#19A7E0]"
                  >
                    <FiPhone />
                    09-6708010
                    <FiArrowUpRight />
                  </a>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* =========================================================
          DIRECT CONTACT
      ========================================================== */}
      <section className="bg-[#F4F9FC] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
            <FadeIn>
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#19A7E0]" />

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                    Direct Contacts
                  </span>
                </div>

                <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-[#063B66] sm:text-5xl">
                  Speak directly with
                  <span className="block text-[#19A7E0]">
                    the Resource Plus team.
                  </span>
                </h2>

                <p className="mt-6 leading-8 text-[#607D94]">
                  For project discussions, technical enquiries, administration
                  or management matters, you can reach the appropriate member
                  of our team directly.
                </p>

                <div className="mt-8 flex items-start gap-4 border-l-2 border-[#19A7E0] bg-white p-5">
                  <FiClock className="mt-1 shrink-0 text-[#19A7E0]" />

                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#063B66]">
                      Project Enquiries
                    </div>

                    <p className="mt-2 text-sm leading-6 text-[#607D94]">
                      Include your project location, scope and technical
                      requirement where possible so our team can respond with
                      the right context.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactPeople.map((person, index) => (
                <FadeIn key={person.name} delay={index * 0.07}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="group h-full border border-slate-200 bg-white p-6 transition-all hover:border-[#19A7E0]"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center bg-[#F2F8FC] text-[#19A7E0]">
                        <FiUsers size={21} />
                      </div>

                      <span className="text-[9px] font-black uppercase tracking-[0.14em] text-slate-300">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-7 text-xl font-black text-[#063B66]">
                      {person.name}
                    </h3>

                    <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#19A7E0]">
                      {person.role}
                    </div>

                    <div className="mt-6 border-t border-slate-100 pt-5">
                      {person.email && (
                        <a
                          href={`mailto:${person.email}`}
                          className="flex items-start gap-3 text-xs text-[#607D94] transition-colors hover:text-[#19A7E0]"
                        >
                          <FiMail className="mt-0.5 shrink-0" />
                          <span className="break-all">{person.email}</span>
                        </a>
                      )}

                      {person.phone && (
                        <a
                          href={`tel:${person.phone.replace(/\s/g, "")}`}
                          className={`flex items-center gap-3 text-xs text-[#607D94] transition-colors hover:text-[#19A7E0] ${
                            person.email ? "mt-3" : ""
                          }`}
                        >
                          <FiPhone className="shrink-0" />
                          {person.phone}
                        </a>
                      )}
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECT ENQUIRY FORM
      ========================================================== */}
      <section
        id="project-enquiry"
        className="bg-[#063B66] py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <FadeIn>
              <div className="lg:sticky lg:top-10">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#19A7E0]" />

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                    Project Enquiry
                  </span>
                </div>

                <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                  Tell us about
                  <span className="block text-[#19A7E0]">
                    your requirement.
                  </span>
                </h2>

                <p className="mt-7 leading-8 text-white/60">
                  Whether you need a new engineering solution, technical
                  assessment, construction service, infrastructure project,
                  equipment package or training programme, give us the details
                  and our team can begin the conversation.
                </p>

                <div className="mt-9 space-y-4">
                  {[
                    "Engineering & technical requirements",
                    "Project and construction enquiries",
                    "Facility protection assessments",
                    "Infrastructure and telecommunications projects",
                    "Power and civil engineering requirements",
                    "Technical training and consulting",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#19A7E0] text-white">
                        <FiCheck size={12} />
                      </div>

                      <span className="text-sm text-white/65">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="bg-white p-7 shadow-2xl sm:p-9 lg:p-12">
                <div className="mb-8">
                  <div className="text-2xl font-black text-[#063B66]">
                    Start your enquiry
                  </div>

                  <p className="mt-2 text-sm leading-6 text-[#607D94]">
                    Provide the information below so we can understand your
                    requirement.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex min-h-[470px] flex-col items-center justify-center text-center"
                    >
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#EAF7FC] text-[#19A7E0]">
                        <FiCheck size={36} />
                      </div>

                      <h3 className="mt-7 text-3xl font-black text-[#063B66]">
                        Enquiry received.
                      </h3>

                      <p className="mt-4 max-w-md text-sm leading-7 text-[#607D94]">
                        Your enquiry has been captured by the website form.
                        Connect this form to your preferred email or backend
                        service before production so submissions are delivered
                        to the Resource Plus team.
                      </p>

                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="mt-7 flex items-center gap-2 bg-[#063B66] px-6 py-4 text-xs font-bold uppercase tracking-[0.13em] text-white transition-colors hover:bg-[#19A7E0]"
                      >
                        Send Another Enquiry
                        <FiArrowUpRight />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="name"
                            className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#063B66]"
                          >
                            Full Name *
                          </label>

                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className="mt-2 w-full border border-slate-200 bg-[#F8FBFD] px-4 py-4 text-sm text-[#102A43] outline-none transition-all placeholder:text-slate-300 focus:border-[#19A7E0] focus:bg-white"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="company"
                            className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#063B66]"
                          >
                            Company / Organisation
                          </label>

                          <input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Company name"
                            className="mt-2 w-full border border-slate-200 bg-[#F8FBFD] px-4 py-4 text-sm text-[#102A43] outline-none transition-all placeholder:text-slate-300 focus:border-[#19A7E0] focus:bg-white"
                          />
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="email"
                            className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#063B66]"
                          >
                            Email Address *
                          </label>

                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@company.com"
                            className="mt-2 w-full border border-slate-200 bg-[#F8FBFD] px-4 py-4 text-sm text-[#102A43] outline-none transition-all placeholder:text-slate-300 focus:border-[#19A7E0] focus:bg-white"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="phone"
                            className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#063B66]"
                          >
                            Phone Number
                          </label>

                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="080..."
                            className="mt-2 w-full border border-slate-200 bg-[#F8FBFD] px-4 py-4 text-sm text-[#102A43] outline-none transition-all placeholder:text-slate-300 focus:border-[#19A7E0] focus:bg-white"
                          />
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="enquiryType"
                            className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#063B66]"
                          >
                            Area of Interest *
                          </label>

                          <div className="relative">
                            <select
                              id="enquiryType"
                              name="enquiryType"
                              required
                              value={formData.enquiryType}
                              onChange={handleChange}
                              className="mt-2 w-full appearance-none border border-slate-200 bg-[#F8FBFD] px-4 py-4 pr-10 text-sm text-[#102A43] outline-none transition-all focus:border-[#19A7E0] focus:bg-white"
                            >
                              <option value="">
                                Select a service
                              </option>

                              {enquiryTypes.map((type) => (
                                <option key={type} value={type}>
                                  {type}
                                </option>
                              ))}
                            </select>

                            <FiChevronDown
                              className="pointer-events-none absolute right-4 top-1/2 mt-1 -translate-y-1/2 text-slate-400"
                              size={17}
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="location"
                            className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#063B66]"
                          >
                            Project Location
                          </label>

                          <input
                            id="location"
                            name="location"
                            type="text"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="City / State"
                            className="mt-2 w-full border border-slate-200 bg-[#F8FBFD] px-4 py-4 text-sm text-[#102A43] outline-none transition-all placeholder:text-slate-300 focus:border-[#19A7E0] focus:bg-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#063B66]"
                        >
                          Tell Us About Your Requirement *
                        </label>

                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={7}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Describe your project, technical requirement, facility, scope of work or enquiry..."
                          className="mt-2 w-full resize-none border border-slate-200 bg-[#F8FBFD] px-4 py-4 text-sm leading-6 text-[#102A43] outline-none transition-all placeholder:text-slate-300 focus:border-[#19A7E0] focus:bg-white"
                        />
                      </div>

                      <button
                        type="submit"
                        className="group flex w-full items-center justify-center gap-3 bg-[#063B66] px-6 py-5 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all hover:bg-[#19A7E0]"
                      >
                        Submit Project Enquiry
                        <FiSend className="transition-transform group-hover:translate-x-1" />
                      </button>

                      <p className="text-center text-[10px] leading-5 text-slate-400">
                        Resource Plus Limited · Engineering Excellence.
                        Delivered.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE HANDLE
      ========================================================== */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn>
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#19A7E0]" />

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                    What We Handle
                  </span>
                </div>

                <h2 className="text-4xl font-black tracking-[-0.04em] text-[#063B66] sm:text-5xl">
                  One team.
                  <span className="block text-[#19A7E0]">
                    Multiple engineering disciplines.
                  </span>
                </h2>

                <p className="mt-6 leading-8 text-[#607D94]">
                  Resource Plus provides comprehensive engineering and
                  construction capabilities across Civil, Mechanical and
                  Electrical Engineering disciplines.
                </p>
              </div>

              <Link
                to="/services"
                className="group flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#063B66]"
              >
                Explore Services
                <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {serviceCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <FadeIn key={item.title} delay={index * 0.08}>
                  <motion.div
                    whileHover={{ y: -7 }}
                    className="group h-full border border-slate-200 p-7 transition-all hover:border-[#19A7E0] hover:shadow-xl"
                  >
                    <div className="flex h-12 w-12 items-center justify-center bg-[#F2F8FC] text-[#19A7E0] transition-colors group-hover:bg-[#063B66]">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-7 text-xl font-black text-[#063B66]">
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

      {/* =========================================================
          HOW WE RESPOND
      ========================================================== */}
      <section className="bg-[#F4F9FC] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#19A7E0]" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                  From Enquiry To Delivery
                </span>
              </div>

              <h2 className="text-4xl font-black tracking-[-0.04em] text-[#063B66] sm:text-5xl">
                A structured approach to
                <span className="block text-[#19A7E0]">
                  engineering requirements.
                </span>
              </h2>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-px bg-slate-200 md:grid-cols-2 lg:grid-cols-4">
            {enquirySteps.map((step, index) => (
              <FadeIn key={step.number} delay={index * 0.08}>
                <motion.div
                  whileHover={{ backgroundColor: "#FFFFFF" }}
                  className="group h-full bg-[#F4F9FC] p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-black tracking-[-0.05em] text-[#19A7E0]">
                      {step.number}
                    </span>

                    {index < enquirySteps.length - 1 && (
                      <FiArrowUpRight className="text-slate-300 transition-colors group-hover:text-[#19A7E0]" />
                    )}
                  </div>

                  <h3 className="mt-10 text-xl font-black text-[#063B66]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#607D94]">
                    {step.text}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          EMAIL / QUICK CONTACT
      ========================================================== */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn>
            <div className="grid overflow-hidden bg-[#063B66] lg:grid-cols-[1fr_auto]">
              <div className="relative overflow-hidden px-8 py-12 lg:px-14">
                <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#19A7E0]/20 to-transparent" />

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <FiMail className="text-[#19A7E0]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#19A7E0]">
                      Email The Team
                    </span>
                  </div>

                  <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">
                    Prefer email?
                  </h2>

                  <p className="mt-4 max-w-2xl leading-7 text-white/55">
                    Send your project requirement directly to our management
                    team.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-5">
                    <a
                      href="mailto:adebanjo.oluwaseun@resource-plus.net"
                      className="text-sm font-semibold text-white transition-colors hover:text-[#19A7E0]"
                    >
                      adebanjo.oluwaseun@resource-plus.net
                    </a>

                    <a
                      href="mailto:jude@resource-plus.net"
                      className="text-sm font-semibold text-white transition-colors hover:text-[#19A7E0]"
                    >
                      jude@resource-plus.net
                    </a>

                   
                  </div>
                </div>
              </div>

              <a
                href="mailto:adebanjo.oluwaseun@resource-plus.net"
                className="group flex items-center justify-center bg-[#19A7E0] px-10 py-8 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-[#063B66]"
              >
                Email Us
                <FiArrowUpRight className="ml-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#F4F9FC] py-24 lg:py-32">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-[#19A7E0]/5" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn>
            <div className="relative overflow-hidden bg-[#063B66] px-8 py-16 lg:px-16 lg:py-20">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />

              <div className="absolute bottom-0 right-0 h-1/2 w-1/2 bg-gradient-to-tl from-[#19A7E0]/15 to-transparent" />

              <div className="relative max-w-4xl">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#19A7E0]" />

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19A7E0]">
                    Resource Plus Limited
                  </span>
                </div>

                <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                  Engineering excellence.
                  <span className="block text-[#19A7E0]">
                    Delivered.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl leading-8 text-white/60">
                  Whatever the engineering challenge, start the conversation
                  with a team built around professionalism, integrity, safety,
                  excellence and local content.
                </p>

                <a
                  href="#project-enquiry"
                  className="group mt-9 inline-flex items-center gap-3 bg-[#19A7E0] px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all hover:bg-white hover:text-[#063B66]"
                >
                  Start Your Project Enquiry
                  <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

export default Contact; 