import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 🔧 Connect this to backend later
    alert("Thank you! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50">
      {/* HERO */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-indigo-400/30 rounded-full blur-[140px]" />

        <h1 className="relative text-5xl md:text-6xl font-extrabold text-blue-900 mb-6">
          Contact Us
        </h1>
        <p className="relative text-xl text-blue-800 max-w-2xl mx-auto">
          Have a question, suggestion, or need help? We’d love to hear from you.
        </p>
      </section>

      {/* FORM */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-slate-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-slate-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-slate-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                rows="5"
                value={form.message}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none resize-none"
                placeholder="How can we help you?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-full text-xl font-bold transition-all hover:scale-[1.02] shadow-xl"
            >
              Send Message
            </button>
          </form>

          {/* CONTACT INFO */}
          <div className="mt-12 text-center text-slate-600">
            <p>
              Email: <span className="font-medium">support@storybook.com</span>
            </p>
            <p className="mt-1">We usually reply within 24 hours.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
