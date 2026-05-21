import React from "react";

function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 px-6 lg:px-[8%] overflow-hidden bg-gradient-to-b from-stone-50 via-purple-50 to-rose-50"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute top-[-180px] right-[-180px] w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-[160px] animate-pulse"></div>

        <div className="absolute bottom-[-180px] left-[-180px] w-[500px] h-[500px] bg-rose-300/30 rounded-full blur-[180px] animate-pulse"></div>

        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(135deg,#000_1px,transparent_1px)] [background-size:40px_40px]"></div>

      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="mb-14">

          <p className="text-sm tracking-[0.3em] uppercase text-purple-500 font-semibold mb-3">
            Work
          </p>

          <h2 className="text-4xl lg:text-5xl font-black text-slate-900">
            Featured Project
          </h2>

          <div className="w-24 h-[3px] mt-4 bg-gradient-to-r from-purple-500 to-rose-500 rounded-full"></div>

        </div>

        {/* MAIN SHOWCASE */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE STYLE CARD */}
          <div className="relative group">

            {/* glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-rose-400/20 blur-3xl rounded-[40px]"></div>

            <div className="relative h-[420px] rounded-[40px] bg-white/60 backdrop-blur-2xl border border-white/40 shadow-[0_30px_100px_rgba(168,85,247,0.15)] flex items-center justify-center">

              {/* PROJECT VISUAL PLACEHOLDER */}
              <div className="text-center space-y-4">

                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-rose-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  DC
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  Donor Connect
                </h3>

                <p className="text-slate-500 text-sm">
                  Emergency Connection Platform UI
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT DETAILS PANEL */}
          <div className="space-y-8">

            {/* TITLE */}
            <h3 className="text-3xl lg:text-4xl font-black text-slate-900">
              Donor Connect
            </h3>

            {/* DESCRIPTION */}
            <p className="text-lg text-slate-600 leading-8">
              A smart platform that connects donors and receivers instantly
              during emergency situations with a clean and fast UI experience.
            </p>

            {/* FEATURE BOXES */}
            <div className="grid sm:grid-cols-2 gap-5">

              <div className="p-5 rounded-2xl bg-white/60 border border-white/40 hover:-translate-y-1 transition">
                <p className="font-semibold text-slate-900">⚡ Fast Access</p>
                <p className="text-sm text-slate-600 mt-1">
                  Instant donor matching system
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/60 border border-white/40 hover:-translate-y-1 transition">
                <p className="font-semibold text-slate-900">🎯 Clean UI</p>
                <p className="text-sm text-slate-600 mt-1">
                  Simple and user-friendly design
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/60 border border-white/40 hover:-translate-y-1 transition">
                <p className="font-semibold text-slate-900">📱 Responsive</p>
                <p className="text-sm text-slate-600 mt-1">
                  Works on all devices
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/60 border border-white/40 hover:-translate-y-1 transition">
                <p className="font-semibold text-slate-900">🚀 Modern Stack</p>
                <p className="text-sm text-slate-600 mt-1">
                  Built with React & Tailwind
                </p>
              </div>

            </div>

            {/* TAGS */}
            <div className="flex flex-wrap gap-3">

              {["React", "Tailwind", "UI Design", "Web App"].map((tag) => (
                <span
                  key={tag}
                  className="px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-100 to-rose-100 border border-white/60 text-slate-700"
                >
                  {tag}
                </span>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;