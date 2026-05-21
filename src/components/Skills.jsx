import React from "react";

function Skills() {
  const skills = [
    {
      title: "React",
      desc: "Building dynamic and component-based user interfaces",
    },
    {
      title: "JavaScript",
      desc: "Core logic for interactive and modern web applications",
    },
    {
      title: "HTML",
      desc: "Structured foundation of all web pages",
    },
    {
      title: "CSS",
      desc: "Styling, layout design, and responsive UI creation",
    },
    {
      title: "Python",
      desc: "Programming for backend logic and automation",
    },
    {
      title: "Java",
      desc: "Object-oriented programming and application development",
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-28 px-6 lg:px-[8%] bg-gradient-to-b from-stone-50 via-purple-50 to-rose-50"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-14">
          <p className="text-sm tracking-[0.3em] uppercase text-purple-400 font-semibold mb-3">
            Skills
          </p>

          <h2 className="font-heading text-4xl lg:text-5xl font-black text-slate-900">
            Skills & Expertise
          </h2>

          <div className="w-20 h-[3px] mt-4 bg-gradient-to-r from-purple-400 to-rose-400 rounded-full"></div>

          <p className="mt-6 text-slate-600 max-w-[650px] leading-8">
            A refined collection of technologies I use to design and build modern,
            scalable, and visually elegant web applications.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill) => (
            <div
              key={skill.title}
              className="
                group relative overflow-hidden

                p-8
                rounded-[28px]

                bg-white/60
                backdrop-blur-2xl

                border-2 border-gray-300

                shadow-[0_15px_60px_rgba(168,85,247,0.08)]
                hover:shadow-[0_25px_80px_rgba(244,63,94,0.12)]

                hover:-translate-y-2
                transition-all duration-300
              "
            >

              {/* glow background */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-300/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition"></div>

              <div className="relative z-10">

                {/* DOT */}
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-rose-500 mb-6"></div>

                {/* TITLE */}
                <h3 className="font-heading text-2xl font-bold text-slate-900">
                  {skill.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-4 text-slate-600 leading-8">
                  {skill.desc}
                </p>

                {/* UNDERLINE */}
                <div className="mt-6 w-12 h-[2px] bg-gradient-to-r from-purple-400 to-rose-400 group-hover:w-20 transition-all rounded-full"></div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;