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
      className="relative py-28 px-6 lg:px-[8%] bg-gradient-to-b from-stone-50 via-gray-50 to-slate-100"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-14">

          <p className="text-sm tracking-[0.3em] uppercase text-gray-500 font-semibold mb-3">
            Skills
          </p>

          <h2 className="text-4xl lg:text-5xl font-black text-slate-900">
            Skills & Expertise
          </h2>

          <div className="w-20 h-[3px] mt-4 bg-gray-400 rounded-full"></div>

          <p className="mt-6 text-slate-600 max-w-[650px] leading-8">
            A refined collection of technologies I use to design and build
            modern, scalable, and visually elegant web applications.
          </p>

        </div>

        {/* SKILLS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill) => (
            <div
              key={skill.title}
              className="
                group
                bg-white
                p-8
                rounded-[28px]
                border border-gray-100

                shadow-[0_10px_30px_rgba(0,0,0,0.08)]

                hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)]

                hover:-translate-y-2

                transition-all duration-300 ease-in-out
              "
            >

              {/* TOP DOT */}
              <div className="w-3 h-3 rounded-full bg-gray-500 mb-6"></div>

              {/* TITLE */}
              <h3 className="text-2xl font-bold text-slate-900">
                {skill.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-4 text-slate-600 leading-8">
                {skill.desc}
              </p>

              {/* UNDERLINE */}
              <div
                className="
                  mt-6
                  w-12
                  h-[2px]
                  bg-gray-400
                  rounded-full

                  group-hover:w-20

                  transition-all duration-300
                "
              ></div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;