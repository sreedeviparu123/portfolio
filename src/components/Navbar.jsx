import React from "react";

const navItems = ["about", "skills", "projects", "contact"];

function Navbar() {
  return (
    <nav
      aria-label="Primary navigation"
      className="h-[90px] flex items-center justify-between"
    >
      {/* LOGO */}
      <a
        href="#home"
        className="text-2xl font-black tracking-[0.35em] text-slate-900"
      >
        SREEDEVI
      </a>

      {/* NAV LINKS */}
      <div
        className="
          hidden md:flex
          items-center gap-2
          px-2 py-2
          rounded-full
          bg-white/60
          backdrop-blur-2xl
          border border-slate-200
          shadow-[0_10px_40px_rgba(15,23,42,0.08)]
        "
      >
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="
              relative
              px-5 py-2
              rounded-full
              text-sm
              font-medium
              text-slate-600
              hover:text-slate-900
              transition-all
              group
            "
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}

            <span
              className="
                absolute left-1/2 -bottom-1
                w-0 h-[2px]
                bg-slate-900
                transition-all duration-300
                group-hover:w-full
                group-hover:left-0
              "
            />
          </a>
        ))}
      </div>

      {/* CTA BUTTON */}
      <a
        href="#contact"
        className="
          hidden md:inline-flex
          px-6 py-3
          rounded-full
          bg-slate-900 text-white
          text-sm font-semibold
          shadow-lg
          hover:bg-slate-800
          hover:-translate-y-1
          transition-all
        "
      >
        Hire Me
      </a>
    </nav>
  );
}

export default Navbar;