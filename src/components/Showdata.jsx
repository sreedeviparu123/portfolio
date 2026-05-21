import React from "react";

function Showdata(){

    return(
        <div className="min-h-screen relative overflow-hidden flex flex-col items-center py-14 px-4 bg-slate-950">

      {/* Background glow layers */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 rounded-full blur-[160px] opacity-30 top-[-120px] left-[-120px]"></div>
      <div className="absolute w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[160px] opacity-20 bottom-[-150px] right-[-150px]"></div>

      {/* Title */}
      <h1 className="relative text-5xl font-extrabold text-white tracking-wide mb-12">
        User Directory
        <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-cyan-400 mt-3 rounded-full"></div>
      </h1>

      {/* Cards */}
      <div className="relative w-full max-w-3xl space-y-6">

        {users.map((user) => (
          <div
            key={user.id}
            className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-purple-500/40 to-cyan-500/40
                       hover:from-purple-400 hover:to-cyan-400 transition-all duration-300"
          >
            <div className="bg-slate-900 rounded-2xl p-6 transition-all duration-300
                            group-hover:bg-slate-800 group-hover:scale-[1.02] shadow-xl">

              {/* Name */}
              <h2 className="text-2xl font-semibold text-white tracking-wide">
                {user.name}
              </h2>

              {/* Email */}
              <p className="text-gray-300 mt-3 text-sm">
                {user.email}
              </p>

              {/* Website */}
              <p className="text-gray-500 mt-1 text-sm">
                {user.website}
              </p>

              {/* Bottom highlight line */}
              <div className="mt-5 h-[2px] w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}     

export default Showdata;