import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50">
      {/* HERO */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Glow */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-indigo-400/30 rounded-full blur-[160px]" />

        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-6">
            About Storybook
          </h1>
          <p className="text-xl md:text-2xl text-blue-800 max-w-3xl mx-auto">
            We create magical, personalized storybooks that turn your child into
            the hero of their own adventure.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              At <span className="font-semibold text-blue-800">Storybook</span>,
              we believe every child deserves to see themselves as the hero of
              their story. Using AI and creativity, we craft personalized
              storybooks that spark imagination, confidence, and joy.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              Each book is uniquely generated based on your child’s name,
              personality, and adventure — creating a keepsake they’ll treasure
              forever.
            </p>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: "✨ Personalized",
                text: "Every story is uniquely crafted for your child.",
              },
              {
                title: "⚡ Fast Creation",
                text: "Your book is generated in minutes using AI.",
              },
              {
                title: "🎨 Beautiful Design",
                text: "High-quality illustrations and storytelling.",
              },
              {
                title: "📘 Lasting Memories",
                text: "A keepsake your family will cherish forever.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-white"
              >
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <Link
            to="/books"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl"
          >
            Create Your Storybook
          </Link>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
