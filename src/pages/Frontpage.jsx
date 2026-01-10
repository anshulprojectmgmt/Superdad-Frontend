import { Link } from "react-router-dom";
import BooksList from "./BooksList";

function Frontpage() {
  return (
    <div className="min-h-screen w-full  ">
      <section className="relative w-full min-h-[90vh] px-6 py-24 overflow-hidden bg-[#050B1E]">
        {/* AURA BACKGROUND */}
        <div className="absolute inset-0">
          {/* Primary glow */}
          <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-blue-500/20 rounded-full blur-[140px]" />
          <div className="absolute top-1/3 -right-48 w-[620px] h-[620px] bg-indigo-500/20 rounded-full blur-[160px]" />
          <div className="absolute bottom-0 left-1/4 w-[420px] h-[420px] bg-cyan-400/10 rounded-full blur-[120px]" />

          {/* Fine grain texture */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />
        </div>

        {/* CONTENT */}
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT — VIDEO AURA CARD */}
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-[2.8rem] bg-gradient-to-br from-cyan-400/40 via-blue-500/30 to-indigo-500/40 blur-xl opacity-70" />

            <div className="relative rounded-[2.5rem] p-[1.5px] bg-gradient-to-br from-cyan-300 via-blue-400 to-indigo-400">
              <div className="relative rounded-[2.4rem] overflow-hidden bg-[#050B1E] h-[440px] lg:h-[520px]">
                {/* Ambient sparkles (VERY subtle) */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(10)].map((_, i) => (
                    <span
                      key={i}
                      className="sparkle absolute"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 6}s`,
                        animationDuration: `${6 + Math.random() * 4}s`,
                      }}
                    />
                  ))}
                </div>

                <video
                  src="/guidelines/video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Glass depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* RIGHT — CONTENT GLASS CARD */}
          <div className="relative ">
            {/* Card glow */}
            <div className="absolute inset-0 rounded-[2.8rem] bg-blue-500/10 blur-2xl " />

            <div className="relative rounded-[2.5rem] bg-white/90 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.35)] p-12">
              <h2 className="text-4xl xl:text-5xl font-extrabold text-[#0B1A3C] mb-6 leading-tight">
                Welcome to Storybook
              </h2>

              <p className="text-lg xl:text-xl text-slate-700 mb-12 leading-relaxed">
                Create personalized storybooks that make your child the hero of
                a magical journey — stories they’ll remember forever.
              </p>

              <h3 className="text-2xl font-bold text-blue-800 mb-8">
                Why Choose StoryBook?
              </h3>

              <div className="space-y-7 mb-14">
                {[
                  {
                    icon: "✨",
                    title: "Personalized Stories",
                    text: "Every book is uniquely crafted for your child",
                  },
                  {
                    icon: "⚡",
                    title: "Quick Creation",
                    text: "Create your book in minutes",
                  },
                  {
                    icon: "🖨️",
                    title: "Quality Guaranteed",
                    text: "Premium printing and materials",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xl">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-slate-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/books"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-[1.04] shadow-xl"
              >
                Create Your Storybook
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50">
        {/* Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />

        {/* Accent lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

        <div className="relative">
          <h2 className="text-4xl font-bold text-center text-blue-900 pt-4">
            Explore Our Storybooks
          </h2>
          <p className="text-xl text-center text-blue-700 mt-4 mb-10">
            Pick a magical adventure for your child
          </p>

          <BooksList layout="horizontal" />
        </div>
      </section>
    </div>
  );
}

export default Frontpage;
