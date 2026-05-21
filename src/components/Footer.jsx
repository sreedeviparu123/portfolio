import React from "react";

function Footer() {
  return (
    <footer className="relative mt-20 px-6 lg:px-[8%] py-16 bg-gradient-to-b from-stone-50 via-purple-50 to-rose-50">

      {/* top border glow line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-300 to-transparent mb-10"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-black text-slate-900">
            Sreedevi
          </h2>

          <p className="mt-4 text-slate-600 leading-7">
            Frontend Developer focused on building clean, modern and
            responsive web applications.
          </p>
        </div>

        {/* CENTER LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-slate-600">
            <a href="#home" className="hover:text-purple-500 transition">Home</a>
            <a href="#about" className="hover:text-purple-500 transition">About</a>
            <a href="#skills" className="hover:text-purple-500 transition">Skills</a>
            <a href="#projects" className="hover:text-purple-500 transition">Projects</a>
            <a href="#contact" className="hover:text-purple-500 transition">Contact</a>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Contact
          </h3>

          <div className="text-slate-600 space-y-2">
            <p>📍 Kerala, India</p>

            <a
              href="mailto:sreedevivl2006@gmail.com"
              className="block hover:text-purple-500 transition"
            >
              📧 Email Me
            </a>

            <a
              href="tel:7306900852"
              className="block hover:text-purple-500 transition"
            >
              📞 Call Me
            </a>
          </div>
        </div>

      </div>

      {/* bottom line */}
      <div className="mt-12 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Sreedevi. Built with React & Tailwind CSS.
      </div>

    </footer>
  );
}

export default Footer;