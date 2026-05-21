import React, { useEffect, useState } from "react";

function About() {
  const fullText = "I build clean, modern & interactive web experiences.";
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;

      if (i > fullText.length) {
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="relative py-28 px-6 lg:px-[8%] overflow-hidden bg-gradient-to-b from-stone-50 via-purple-50 to-rose-50"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute top-[-180px] left-[-180px] w-[500px] h-[500px] bg-purple-400/25 rounded-full blur-[160px] animate-pulse"></div>

        <div className="absolute bottom-[-180px] right-[-180px] w-[500px] h-[500px] bg-rose-400/25 rounded-full blur-[180px] animate-pulse"></div>

        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(135deg,#000_1px,transparent_1px)] [background-size:40px_40px]"></div>

      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="mb-14">

          <p className="text-sm tracking-[0.3em] uppercase text-purple-500 font-semibold">
            Developer Profile
          </p>

          <h2 className="text-4xl lg:text-5xl font-black text-slate-900">
            About
          </h2>

          <div className="w-24 h-[3px] mt-4 bg-gradient-to-r from-purple-500 to-rose-500 rounded-full"></div>

        </div>

        {/* MAIN CARD */}
        <div className="relative group">

          {/* glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-rose-400/20 blur-3xl rounded-[40px]"></div>

          <div className="relative bg-white/60 backdrop-blur-2xl border border-white/40 rounded-[40px] p-10 lg:p-14 shadow-[0_30px_100px_rgba(168,85,247,0.15)] transition-transform duration-500 group-hover:scale-[1.01]">

            {/* STATUS */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
              <p className="text-sm font-semibold text-slate-700 tracking-wider">
                AVAILABLE FOR WORK
              </p>
            </div>

            {/* NAME */}
            <h3 className="text-4xl font-black text-slate-900">
              I’m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-rose-500">
                Sreedevi B L
              </span>
            </h3>

            {/* TYPEWRITER */}
            <p className="mt-6 text-lg text-slate-600 min-h-[40px]">
              {text}
              <span className="animate-pulse">|</span>
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-3 mt-10">

              {["Frontend Developer", "React", "Tailwind CSS", "UI Development"].map(
                (item) => (
                  <span
                    key={item}
                    className="px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-100 to-rose-100 border border-white/60 shadow-sm hover:scale-105 transition"
                  >
                    {item}
                  </span>
                )
              )}

            </div>

            {/* INFO GRID (UPDATED COLORS) */}
            <div className="grid sm:grid-cols-3 gap-6 mt-12">

              {/* FOCUS */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 hover:-translate-y-1 transition">
                <p className="text-sm font-semibold text-purple-600 tracking-wide">
                  Focus
                </p>
                <p className="text-slate-700 mt-1 font-medium">
                  Frontend Development
                </p>
              </div>

              {/* GOAL */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-rose-50 to-white border border-rose-100 hover:-translate-y-1 transition">
                <p className="text-sm font-semibold text-rose-600 tracking-wide">
                  Goal
                </p>
                <p className="text-slate-700 mt-1 font-medium">
                  Clean & Modern UX
                </p>
              </div>

              {/* LOCATION */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:-translate-y-1 transition">
                <p className="text-sm font-semibold text-blue-600 tracking-wide">
                  Location
                </p>
                <p className="text-slate-700 mt-1 font-medium">
                  India
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;