"use client";

export default function Contact() {
  const contactInfo = [
    {
      id: 1,
      icon: "mail",
      label: "Email",
      value: "hello@agency.design",
    },
    {
      id: 2,
      icon: "call",
      label: "Phone",
      value: "+1 (555) 012-3456",
    },
    {
      id: 3,
      icon: "location_on",
      label: "Location",
      value: "123 Innovation Dr, Tech City",
    },
  ];

  return (
    <section
      id="contact"
      className="relative bg-linear-to-br from-[#e0e7ff] via-[#ede9fe] to-[#e0e7ff] text-[#1e293b] font-display overflow-hidden py-5"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 flex items-center justify-center p-6 md:p-12 lg:p-24">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest w-fit">
                Contact Us
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] text-[#1e293b]">
                LET&apos;S BUILD <br />
                <span className="text-primary">TOGETHER.</span>
              </h1>
              <p className="text-lg text-[#475569] leading-relaxed font-normal max-w-md">
                Have a project in mind? We specialize in crafting digital
                experiences with precision and technical elegance. Reach out
                directly or use the form.
              </p>
            </div>

            <div className="h-px w-full bg-linear-to-r from-transparent via-[#cbd5e1] to-transparent"></div>

            <div className="grid gap-8">
              {contactInfo.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-5 group cursor-pointer"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-white/60 border border-[#cbd5e1] text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 shadow-sm">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "24px" }}
                    >
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748b] mb-1">
                      {item.label}
                    </h3>
                    <p className="text-lg font-medium text-[#1e293b] group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="bg-white/40 backdrop-blur-md p-8 md:p-12 border border-white/50 shadow-xl shadow-indigo-100/40 relative w-full">
              <div className="absolute -top-[1px] -left-[1px] w-6 h-6 border-t-2 border-l-2 border-primary"></div>
              <div className="absolute -top-[1px] -right-[1px] w-6 h-6 border-t-2 border-r-2 border-primary"></div>
              <div className="absolute -bottom-[1px] -left-[1px] w-6 h-6 border-b-2 border-l-2 border-primary"></div>
              <div className="absolute -bottom-[1px] -right-[1px] w-6 h-6 border-b-2 border-r-2 border-primary"></div>

              <form
                className="flex flex-col gap-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label className="flex flex-col gap-2 group">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#64748b] group-focus-within:text-primary transition-colors">
                      Name
                    </span>
                    <input
                      className="w-full h-14 bg-white/70 text-[#1e293b] border border-[#cbd5e1] px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 rounded-none placeholder:text-[#94a3b8]"
                      placeholder="Your Name"
                      type="text"
                    />
                  </label>
                  <label className="flex flex-col gap-2 group">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#64748b] group-focus-within:text-primary transition-colors">
                      Email
                    </span>
                    <input
                      className="w-full h-14 bg-white/70 text-[#1e293b] border border-[#cbd5e1] px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 rounded-none placeholder:text-[#94a3b8]"
                      placeholder="your@email.com"
                      type="email"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-2 group">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#64748b] group-focus-within:text-primary transition-colors">
                    Subject
                  </span>
                  <input
                    className="w-full h-14 bg-white/70 text-[#1e293b] border border-[#cbd5e1] px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 rounded-none placeholder:text-[#94a3b8]"
                    placeholder="Project Inquiry"
                    type="text"
                  />
                </label>
                <label className="flex flex-col gap-2 group">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#64748b] group-focus-within:text-primary transition-colors">
                    Message
                  </span>
                  <textarea
                    className="w-full min-h-[160px] resize-y bg-white/70 text-[#1e293b] border border-[#cbd5e1] px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 rounded-none placeholder:text-[#94a3b8]"
                    placeholder="Describe your project requirements..."
                  ></textarea>
                </label>
                <div className="pt-2">
                  <button
                    className="w-full md:w-auto px-10 h-14 bg-primary text-white font-bold uppercase tracking-widest text-sm hover:bg-[#1e293b] hover:text-white transition-all duration-300 rounded-none flex items-center justify-center gap-3 group border border-transparent hover:border-[#1e293b] shadow-lg shadow-primary/20 hover:shadow-none"
                    type="submit"
                  >
                    Send Message
                    <span
                      className="material-symbols-outlined group-hover:translate-x-1 transition-transform"
                      style={{ fontSize: "20px" }}
                    >
                      arrow_forward
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
