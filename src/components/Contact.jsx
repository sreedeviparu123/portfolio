import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 lg:px-[8%] bg-gradient-to-b from-stone-50 via-purple-50 to-rose-50"
    >
      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <div className="mb-14">
          <p className="text-sm tracking-[0.3em] uppercase text-purple-400 font-semibold mb-3">
            Get in Touch
          </p>

          <h2 className="font-heading text-4xl lg:text-5xl font-black text-slate-900">
            Contact
          </h2>

          <div className="w-20 h-[3px] mt-4 bg-gradient-to-r from-purple-400 to-rose-400 rounded-full"></div>

          <p className="mt-6 text-slate-600 max-w-[650px] leading-8">
            Feel free to reach out for collaborations, opportunities, or just a friendly hello.
          </p>
        </div>

        {/* CARD */}
        <div
          className="
            relative overflow-hidden
            max-w-2xl

            bg-white/60
            backdrop-blur-2xl
            border border-white/40

            rounded-[32px]
            p-10

            shadow-[0_20px_80px_rgba(168,85,247,0.10)]
            hover:shadow-[0_30px_100px_rgba(244,63,94,0.15)]

            transition-all duration-500
          "
        >
          {/* glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl"></div>

          <div className="relative z-10 space-y-10">

            {/* EMAIL */}
            <div className="flex items-start gap-5 group">
              <div className="w-3 h-3 mt-2 rounded-full bg-gradient-to-r from-purple-500 to-rose-500"></div>

              <div>
                <p className="text-slate-900 font-semibold text-lg font-heading">
                  Email
                </p>

                <a
                  href="mailto:sreedevivl2006@gmail.com"
                  className="text-slate-600 mt-1 hover:text-purple-500 transition"
                >
                  sreedevivl2006@gmail.com
                </a>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex items-start gap-5 group">
              <div className="w-3 h-3 mt-2 rounded-full bg-gradient-to-r from-purple-500 to-rose-500"></div>

              <div>
                <p className="text-slate-900 font-semibold text-lg font-heading">
                  Phone
                </p>

                <a
                  href="tel:7306900852"
                  className="text-slate-600 mt-1 hover:text-purple-500 transition"
                >
                  7306900852
                </a>
              </div>
            </div>

            {/* LOCATION */}
            <div className="flex items-start gap-5">
              <div className="w-3 h-3 mt-2 rounded-full bg-gradient-to-r from-purple-500 to-rose-500"></div>

              <div>
                <p className="text-slate-900 font-semibold text-lg font-heading">
                  Location
                </p>

                <p className="text-slate-600 mt-1">
                  Kerala, India
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;