import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <a href="#" className="font-display text-xl font-bold text-primary">NT</a>
        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-4 flex flex-col gap-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
