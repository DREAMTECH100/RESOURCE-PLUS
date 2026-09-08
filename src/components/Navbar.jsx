import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowUpRight,
  FiMenu,
  FiX,
} from "react-icons/fi";

import logo from "../assets/logo.png";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <nav className="flex h-24 items-center justify-between border-b border-slate-200/80">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Resource Plus Limited"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 transition-colors hover:text-[#063B66]"
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/contact"
              className="group ml-3 flex items-center gap-2 rounded-sm bg-[#063B66] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition-all hover:bg-[#19A7E0]"
            >
              Start a Project

              <FiArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-sm border border-slate-200 text-[#063B66] lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-b border-slate-200 bg-white shadow-xl lg:hidden"
            >
              <div className="flex flex-col px-2 py-5">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-slate-100 px-3 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-600 transition-colors hover:text-[#063B66]"
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-5 flex items-center justify-center gap-2 rounded-sm bg-[#063B66] px-5 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#19A7E0]"
                >
                  Start a Project
                  <FiArrowUpRight />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Navbar;