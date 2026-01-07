export default function Footer() {
  const links = [
    { id: 1, label: "Privacy Policy", href: "#" },
    { id: 2, label: "Terms of Service", href: "#" },
    { id: 3, label: "Careers", href: "#" },
    { id: 4, label: "Contact", href: "#" },
  ];

  const socialLinks = [
    { id: 1, icon: "public", href: "#" },
    { id: 2, icon: "chat_bubble", href: "#" },
    { id: 3, icon: "share", href: "#" },
  ];

  return (
    <footer className="border-t border-blue-200 bg-gradient-to-br from-purple-50 to-blue-50 px-6 py-12 md:px-10">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="material-symbols-outlined text-primary text-2xl">
            deployed_code
          </span>
          <span className="text-slate-900 text-lg font-bold tracking-tight">
            TechAgency
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {links.map((link) => (
            <a
              key={link.id}
              className="text-slate-600 hover:text-primary text-sm font-medium transition-colors"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex justify-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              className="text-slate-400 hover:text-primary transition-colors"
              href={social.href}
            >
              <span className="material-symbols-outlined text-2xl">
                {social.icon}
              </span>
            </a>
          ))}
        </div>

        <p className="text-slate-500 text-sm font-normal">
          © 2023 TechAgency. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
