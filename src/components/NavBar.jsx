import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpened ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpened]);

  return (
    <nav
      className={cn(
        "fixed w-full transition-all z-50 duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
          : "py-5",
      )}
    >
      <div className="container flex items-center justify-between gap-4">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">MohTech</span> Portfolio
          </span>
        </a>

        {/* desktop version */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMenuOpened((prev) => !prev)}
            className="p-2 text-foreground z-50"
            aria-label={isMenuOpened ? "Close Menu" : "Open menu"}
          >
            {isMenuOpened ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* mobile version — rendered via portal so it escapes nav's backdrop-blur containing block */}
      {typeof document !== "undefined" &&
        createPortal(
          <div
            className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpened
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none",
          )}
          >
            <div className="flex flex-col space-y-8 text-xl text-center">
              {navItems.map((item, key) => (
                <a
                  key={key}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpened(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>,
          document.body,
        )}
    </nav>
  );
}