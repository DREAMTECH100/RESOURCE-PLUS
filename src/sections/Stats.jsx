import { motion } from "framer-motion";

const stats = [
  {
    value: "30+",
    label: "Years of Engineering Excellence",
  },
  {
    value: "50+",
    label: "Major Projects",
  },
  {
    value: "0%",
    label: "Safety Incidents",
  },
  {
    value: "10+",
    label: "Engineering & Technical Staff",
  },
  {
    value: "10+",
    label: "Strategic Alliance Members",
  },
];

function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-slate-100 bg-[#F4F9FC]">
      {/* subtle background detail */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#19A7E0]/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-16">
        <div className="grid grid-cols-2 divide-x divide-slate-200 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className={`px-5 py-4 ${
                index === 4 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#19A7E0]" />

                <div>
                  <div className="text-4xl font-black tracking-[-0.04em] text-[#063B66] sm:text-5xl">
                    {stat.value}
                  </div>

                  <div className="mt-2 max-w-[150px] text-[10px] font-bold uppercase leading-5 tracking-[0.12em] text-slate-400">
                    {stat.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;