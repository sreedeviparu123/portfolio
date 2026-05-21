import React from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-slate-900">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* soft warm gradient blobs */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[700px]
          bg-[radial-gradient(circle_at_30%_30%,rgba(255,120,80,0.18),transparent_60%),radial-gradient(circle_at_70%_40%,rgba(255,180,120,0.18),transparent_60%),radial-gradient(circle_at_50%_80%,rgba(255,80,80,0.12),transparent_60%)]
          blur-[120px]">
        </div>

        {/* soft grid */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 px-6 lg:px-[8%]">

        <Navbar />

        <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between gap-16 py-16">

          {/* LEFT SIDE */}
          <div className="flex-1">

            {/* badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-50 border border-orange-100 mb-8">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse mr-3"></span>
              Frontend Developer
            </div>

            {/* heading */}
            <h1 className="text-[3.2rem] sm:text-[4.5rem] lg:text-[6.5rem] font-black leading-[1] tracking-[-3px]">
              Crafting
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                Beautiful
              </span>
              <br />
              Interfaces
            </h1>

            {/* description */}
            <p className="mt-8 max-w-[600px] text-lg leading-8 text-slate-600">
              Passionate Computer Engineering student focused on building clean,
              responsive, and modern web applications using React and Tailwind CSS
              with strong attention to UI/UX detail.
            </p>

            {/* buttons */}
            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="#projects"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold shadow-md hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-8 py-4 rounded-xl border border-orange-200 bg-orange-50 text-slate-800 font-semibold hover:border-orange-400 hover:scale-105 transition"
              >
                Contact Me
              </a>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1 flex justify-center">

            <div className="relative w-full max-w-[420px]">

              {/* glow */}
              <div className="absolute inset-0 bg-orange-200/40 blur-3xl rounded-3xl"></div>

              {/* card */}
              <div className="relative bg-white border border-orange-100 rounded-3xl p-10 shadow-xl">

                {/* PROFILE IMAGE (MEDIUM-LARGE SQUARE) */}
                <div className="w-56 h-56 mx-auto overflow-hidden rounded-2xl border-4 border-orange-100 shadow-lg">
                  <img
                    src="/image/paru.jpeg"
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* name */}
                <h2 className="text-center mt-6 text-2xl font-bold">
                  Sreedevi B L
                </h2>

                <p className="text-center text-slate-500 mt-3 text-sm leading-6">
                  Frontend developer focused on clean, modern and responsive UI design.
                </p>

                {/* tags */}
                <div className="flex flex-wrap justify-center gap-3 mt-8">

                  {["React", "Tailwind", "UI Design", "Web Dev"].map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-sm text-slate-700 hover:scale-105 transition"
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </section>
      </div>

    </main>
  );
}

export default Home;